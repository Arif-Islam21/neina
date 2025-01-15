import { useForm } from "react-hook-form";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import toast from "react-hot-toast";
import menu from "/images/food.jpg";

const AddMenu = () => {
  const { register, handleSubmit } = useForm();
  const AxiosCommon = useAxiosCommon();

  const onSubmit = async (data) => {
    const { name, category, price, availability, photo } = data;
    const priceInt = isNaN(parseInt(price)) ? 0 : parseInt(price);
    const menuData = { name, category, price: priceInt, availability, photo };
    try {
      const res = await AxiosCommon.post("/menu", menuData);
      if (res?.data?.insertedId) {
        toast.success("Menu Added Successfully");
      }
    } catch (error) {
      console.error("Error posting data to /menu:", error);
    }
  };

  return (
    <div
      style={{
        // backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzgC7opEQKC1uRyboSU8-DBwb2S4-_OtmVmlEkjGer96xQuUtNTACW8bY&s")`,
        backgroundImage: `url(${menu})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="container mx-auto min-h-screen flex items-center justify-center"
    >
      <div className="max-w-2xl lg:min-w-96 mx-auto my-12 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              {...register("name", { required: true })}
              type="text"
              className="grow"
              placeholder="Menu Name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Photo
            <input
              {...register("photo", { required: true })}
              type="text"
              className="grow"
              placeholder="Enter Photo URL"
            />
          </label>
          <select
            {...register("category", { required: true })}
            defaultValue={"selected"}
            className="select select-bordered w-full "
          >
            <option disabled value="selected">
              Category
            </option>
            <option>Appetizers</option>
            <option>Desserts</option>
            <option>Main Course</option>
          </select>
          <label className="input input-bordered flex items-center gap-2">
            Price
            <input
              {...register("price", { required: true })}
              type="number"
              className="grow"
              placeholder="Price"
            />
            <kbd className="kbd kbd-sm">💵</kbd>
          </label>
          <select
            {...register("availability", { required: true })}
            className="select select-bordered w-full "
          >
            <option>Available</option>
            <option>Not Available</option>
          </select>
          <button className="btn btn-block border-green-950 font-bold hover:bg-green-800 hover:text-white mt-4">
            Add Menu
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
