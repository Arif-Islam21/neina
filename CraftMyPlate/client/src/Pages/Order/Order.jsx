import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useAuth from "../../hooks/useAuth";

const Order = () => {
  const AxiosCommon = useAxiosCommon();
  const { user } = useAuth();

  const { data: orderData = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await AxiosCommon.get(`order`);
      return data;
    },
  });

  const totalPrice = orderData?.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalItem = orderData?.reduce((acc, item) => acc + item.totalItem, 0);

  //   const handleOrder = async () => {
  //     const orderData = {
  //       email: user?.email,
  //       totalPrice,
  //       totalItem,
  //     };
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "Your Order will be placed!",
  //       icon: "question",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {
  //         const { data } = await AxiosCommon.post("/order", orderData);
  //         if (data?.insertedId) {
  //           refetch();
  //           Swal.fire({
  //             title: "Confirmed!",
  //             text: "Your order has been placed!",
  //             icon: "success",
  //           });
  //         }
  //       }
  //     });
  //   };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Buyer</th>
              <th>Total Price</th>
              <th>Total Item</th>
            </tr>
          </thead>
          <tbody>
            {orderData?.map((item, idx) => (
              <tr key={item._id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{item?.email}</td>
                <td>{item?.totalPrice}</td>
                <td>{item?.totalItem}</td>
              </tr>
            ))}
            <tr className="bg-base-200 border-2">
              <th></th>
              <th className="font-bold">Total</th>

              <th>{totalPrice}</th>
              <th>{totalItem}</th>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default Order;
