import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Cart = () => {
  const AxiosCommon = useAxiosCommon();
  const { user } = useAuth();

  const { data: cartData = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await AxiosCommon.get(`/cart/${user?.email}`);
      return data;
    },
  });

  const totalPrice = cartData?.reduce((acc, item) => acc + item.price, 0);
  const totalItem = cartData?.reduce((acc, item) => acc + item.quantity, 0);

  const handleOrder = async () => {
    const orderData = {
      email: user?.email,
      totalPrice,
      totalItem,
      status: "pending",
      createdAt: new Date().toLocaleDateString(),
    };
    Swal.fire({
      title: "Are you sure?",
      text: "Your Order will be placed!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await AxiosCommon.post(`/order`, orderData);
        if (data?.insertedId) {
          refetch();
          Swal.fire({
            title: "Confirmed!",
            text: "Your order has been placed!",
            icon: "success",
          });
        }
      }
    });
  };

  // if (cartData.length === 0) {
  //   return (
  //     <div className="container mx-auto">
  //       <h1 className="text-2xl text-center mt-6">No item in the cart</h1>
  //       <p className="text-center text-gray-600 font-semibold">
  //         Add Item and revisit
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>availability</th>
              <th>category</th>
              <th>price</th>
              <th>quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((item, idx) => (
              <tr key={item._id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{item?.name}</td>
                <td
                  className={`${
                    item?.availability === "Available"
                      ? "text-green-800"
                      : "text-red-600"
                  } font-bold`}
                >
                  {item?.availability}
                </td>
                <td>{item?.category}</td>
                <td className="font-semibold">${item?.price}</td>
                <td>{item?.quantity}</td>
              </tr>
            ))}
            <tr className="bg-base-200 border-2">
              <th></th>
              <th className="font-bold">Total</th>
              <th></th>
              <th></th>
              <th>{totalPrice}</th>
              <th>{totalItem}</th>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center">
          <button
            onClick={handleOrder}
            className="btn btn-outline border max-w-lg mx-auto font-bold text-green-600 border-green-600 btn-block my-6"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
