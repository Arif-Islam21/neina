import Sidebar from "../components/Home/Sidebar";
import Navbar from "../components/shared/Navbar";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <section className="grid grid-cols-12 gap-6 my-6 container mx-auto bg-[#F9FAFB]">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9 ">
          <MainContent />
        </div>
      </section>
    </div>
  );
};

export default Home;
