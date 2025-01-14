import { NavLink } from "react-router";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    await registerUser(email, password).then((res) => {
      if (res.user.uid) {
        toast.success("Successfully Account Created!");
      } else {
        toast.error("User Not Created");
      }
    });
  };

  return (
    <div className="bg-base-200">
      <div className="hero lg:py-24 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6 max-w-lg">
              Login Now for geting exciting deals and offers. It is very easy to
              login to our website. So, We will see you soon.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn border-2 border-green-950 font-bold hover:bg-green-800 hover:text-white">
                  Register
                </button>
              </div>
            </form>
            <p className="text-sm font-semibold text-center pb-4">
              Already have an account?
              <NavLink to="/login" className="btn-link">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
