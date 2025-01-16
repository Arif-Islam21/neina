import { Route, Routes } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Menu from "../Pages/Menu/Menu";
import AddMenu from "../Pages/Menu/AddMenu";
import UpdateMenu from "../Pages/Menu/UpdateMenu";
import Cart from "../Pages/cart/Cart";
import Order from "../Pages/Order/Order";
import OrderHistory from "../Pages/Order/OrderHistory";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/addMenu" element={<AddMenu />} />
        <Route path="/updateMenu/:id" element={<UpdateMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
