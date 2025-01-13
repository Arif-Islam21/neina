import { NavLink } from "react-router";

const Login = () => {
  return (
    <div className="bg-base-200">
      <div className="hero lg:py-24 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 max-w-lg">
              Login Now for geting exciting deals and offers. It is very easy to
              login to our website. So, We will see you soon.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn border-2 border-green-950 font-bold hover:bg-green-800 hover:text-white">
                  Login
                </button>
              </div>
            </form>
            <p className="text-sm font-semibold text-center pb-4">
              Don&apos;t have an account?{" "}
              <NavLink to="/register" className="btn-link">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
