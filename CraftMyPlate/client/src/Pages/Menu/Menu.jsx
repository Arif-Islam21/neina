import MenuCard from "../../Components/cards/MenuCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import useUserRole from "../../hooks/useUserRole";

const Menu = () => {
  const AxiosCommon = useAxiosCommon();
  const role = useUserRole();
  // console.log(role?.role);

  const { data, refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await AxiosCommon.get("/menu");
      return data;
    },
  });

  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((item) => (
          <MenuCard
            key={item._id}
            item={item}
            refetch={refetch}
            role={role?.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
