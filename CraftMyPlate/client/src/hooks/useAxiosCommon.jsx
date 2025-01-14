import axios from "axios";

const useAxiosCommon = () => {
  const AxiosCommon = axios.create({
    baseURL: "http://localhost:5000/",
  });

  return AxiosCommon;
};

export default useAxiosCommon;
