import { Outlet } from "react-router";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-70px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
