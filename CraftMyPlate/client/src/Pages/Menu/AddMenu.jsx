import { useForm } from "react-hook-form";

const AddMenu = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="max-w-lg mx-auto my-12 ">
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
  );
};

export default AddMenu;
