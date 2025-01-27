import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const MenuCard = ({ item, refetch, role }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, category, price, availability, photo } = item;
  const AxiosCommon = useAxiosCommon();
  const { user } = useAuth();

  const handleAddToCart = async () => {
    const productInfo = {
      productId: _id,
      quantity: 1,
      price: price,
      userEmail: user?.email,
      name,
      availability,
      category,
    };
    const res = await AxiosCommon.post("/cart", productInfo);
    if (res?.data?.insertedId) {
      Swal.fire({
        title: "Added to Cart",
        text: "Your item has been added to cart",
        icon: "success",
      });
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await AxiosCommon.delete(`/menu/${_id}`).then((res) => {
          if (res?.data?.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your menu has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo ? photo : "https://source.unsplash.com/500x500/?food"}
          alt={category}
          className="w-full max-h-[30vh] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm font-semibold">${price}</p>
        <p className="border rounded-md max-w-32 text-center font-semibold border-green-950 text-green-700">
          {availability}
        </p>
        <div className="card-actions justify-center">
          {role === "Seller" ? (
            <div className="flex items-center justify-between mt-2 w-full gap-3">
              <Link to="/addMenu" className="btn btn-outline text-green-800 ">
                <IoIosAddCircleOutline size={28} />
              </Link>
              <Link
                to={`/updateMenu/${_id}`}
                className="btn btn-outline text-blue-600 "
              >
                <FaRegEdit size={28} />
              </Link>

              <button
                onClick={handleDelete}
                className="btn btn-outline text-red-700 "
              >
                <MdOutlineDelete size={28} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="btn btn-sm btn-block btn-outline border-green-800 text-green-800 font-bold"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
