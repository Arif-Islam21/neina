import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-70px)] container mx-auto bg-secondary">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
