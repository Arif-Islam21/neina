import axios from "axios";

const useAxiosCommon = () => {
  const token = localStorage.getItem("accessToken");
  // console.log(token);
  const AxiosCommon = axios.create({
    baseURL: "https://craftmyplateserver.onrender.com",
    // baseURL:
    //   "https://craftmyplate-frbh2gema-arifs-projects-c80db1af.vercel.app/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return AxiosCommon;
};

export default useAxiosCommon;
