const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.knlt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const userCollection = client.db("craftMyPlate").collection("users");
    const menuCollection = client.db("craftMyPlate").collection("menu");
    const cartCollection = client.db("craftMyPlate").collection("cart");
    const orderCollection = client.db("craftMyPlate").collection("order");

    app.post("/jwt", (req, res) => {
      const userEmail = req.body;
      if (!userEmail.email) {
        return res.send({ message: "Email is required" });
      }
      const token = jwt.sign(userEmail, process.env.TOKEN_SECRET, {
        expiresIn: "10d",
      });
      res.send({ token });
    });

    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });

    app.get("/menu/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await menuCollection.findOne(query);
      res.send(result);
    });

    app.get("/userRole/:email", async (req, res) => {
      const { email } = req.params;
      const query = { email };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    app.get("/cart/:email", async (req, res) => {
      const data = req.params;
      const query = { userEmail: data.email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/menu", async (req, res) => {
      const data = req.body;
      const result = await menuCollection.insertOne(data);
      res.send(result);
    });

    app.get("/order", async (req, res) => {
      const result = await orderCollection.find().toArray();
      res.send(result);
    });

    app.get("/orderHistory/:email", async (req, res) => {
      const { email } = req.params;
      const query = { email };
      const result = await orderCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/order", async (req, res) => {
      const data = req.body;
      const result = await orderCollection.insertOne(data);
      const clearCart = await cartCollection.deleteMany({
        userEmail: data?.email,
      });
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const data = req.body;
      const isRemaining = await userCollection.findOne({ email: data.email });
      if (isRemaining) {
        return res.send({ message: "User Already Exist" });
      }
      const result = await userCollection.insertOne(data);
      res.send(result);
    });

    app.post("/cart", async (req, res) => {
      const data = req.body;
      const result = await cartCollection.insertOne(data);
      res.send(result);
    });

    app.put("/menu/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const data = req.body;
      const result = await menuCollection.updateOne(query, { $set: data });
      res.send(result);
    });

    app.delete("/menu/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await menuCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
