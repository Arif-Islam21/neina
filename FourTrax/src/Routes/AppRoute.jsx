import { Route, Routes } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
