import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";

// Desc: Order History Page
const OrderHistory = () => {
  const { user } = useAuth();
  const AxiosCommon = useAxiosCommon();
  const { data: orderData = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await AxiosCommon.get(`/orderHistory/${user?.email}`);
      return data;
    },
  });

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Total Item</th>
              <th>Total Price</th>
              <th>Order Status</th>
              <th>Order Created At</th>
            </tr>
          </thead>
          <tbody>
            {orderData?.map((item, idx) => (
              <tr key={item._id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{item?.totalItem}</td>
                <td className="font-semibold">${item?.totalPrice}</td>
                <td
                  className={`${
                    item?.status === "pending"
                      ? "text-orange-600"
                      : "text-green-600"
                  } font-bold`}
                >
                  {item?.status}
                </td>
                <td>{item?.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default OrderHistory;
