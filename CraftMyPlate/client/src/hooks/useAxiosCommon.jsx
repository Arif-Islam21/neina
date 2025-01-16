import axios from "axios";

const useAxiosCommon = () => {
  const token = localStorage.getItem("accessToken");
  // console.log(token);
  const AxiosCommon = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL:
      "https://craftmyplate-h70wtkfvd-arifs-projects-c80db1af.vercel.app",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return AxiosCommon;
};

export default useAxiosCommon;
