import { NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut, setUser } = useAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      await setUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "Add Menu",
      link: "/addMenu",
    },
  ];

  const navLinks = (
    <>
      {links.map((item, idx) => (
        <li
          className="mr-2  hover:bg-green-600 hover:text-white font-bold rounded-xl"
          key={idx}
        >
          <NavLink to={item.link}>{item.name}</NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl font-mono">
            Food Crafty
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full flex justify-center items-center text-center">
                  <FaUser size={28} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-3 ">
              <NavLink
                to="/login"
                className="btn border-2 border-green-950 font-bold hover:bg-green-800 hover:text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn border-2 border-green-950 font-bold hover:bg-white text-white bg-green-800 hover:text-green-950"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
