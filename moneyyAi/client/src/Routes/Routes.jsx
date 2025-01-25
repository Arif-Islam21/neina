import { Routes, Route } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
};

export default HomeRoute;
