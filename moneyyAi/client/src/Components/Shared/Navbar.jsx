import { AiOutlineStock } from "react-icons/ai";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { label: "AI Strategies", path: "/strategy" },
    { label: "Backtesting", path: "/backtesting" },
    { label: "Market Feed", path: "/market-news" },
    { label: "Learn", path: "/404" },
  ];

  const links = (
    <>
      {menuItems.map(({ label, path }) => (
        <li
          key={label}
          className={`py-3 ${
            pathname === path
              ? "text-primary border-2 border-gray-700 rounded-none font-bold mr-2 bg-[#FFE484] border-b-0"
              : "text-[#4C4C4C] font-bold mr-2  hover:text-primary"
          }`}
        >
          <Link to={path} className="rounded-none hover:bg-transparent">
            {label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="bg-base-100 border-b-2 border-gray-600 shadow-sm">
      <div className=" flex items-center container  mx-auto">
        <div className="navbar-start  max-w-fit px-12">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* FOR SMALL DEVICES */}
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className=" text-2xl flex items-center gap-1 text-primary font-bold"
          >
            <AiOutlineStock /> Moneyy.ai
          </Link>
        </div>
        <div className="h-full grow  hidden lg:flex">
          <ul className="menu menu-horizontal  h-full py-0 px-1">
            {/* FOR LARGE DEVICES */}
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn btn-primary mr-4 text-white">Sign Up Free</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
