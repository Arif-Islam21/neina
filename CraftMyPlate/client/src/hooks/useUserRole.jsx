import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
  const AxiosCommon = useAxiosCommon();
  const { user } = useAuth();
  //   console.log(user);
  const { data } = useQuery({
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      const { data } = await AxiosCommon.get(`/userRole/${user?.email}`);
      return data;
    },
  });

  return data;
};

export default useUserRole;
