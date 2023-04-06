import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import UserContext from "../contexts/userContext";
const schema = yup.object({
  email: yup.string().email().required("Please fill out this field."),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
      "Password must contain at least one number and one special character."
    ),
});

export default function LogIn() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (body) => {
    try {
      const { data: res } = await axios.post(
        "https://slice-of-sin-backend.onrender.com/v1/auth/sign-in",
        body
      );
      if (res.success === true) {
        toast.success("Your are logged successfully");
      }

      setUser(res.data);
      navigate("/");
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 401) {
        toast.error("Invalid email or password!");
      }
    }
  };

  return (
    <>
     
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://media.timeout.com/images/105898230/image.jpg")`,
        }}
      >
        <form
          className="w-full max-w-lg  mb-24 card px-10 py-6	shadow-2xl  mt-20 bg-white  flex justify-start "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center text-4xl pb-4 text-gray-600">Login</h1>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-lg  mb-1 text-gray-600">
                Email
              </label>

              <input
                {...register("email")}
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500"
                id="grid-first-name"
                type="email"
                placeholder="Example@gmail.com"
              />
              <p className="text-red-500 text-xs italic">
                {errors.email?.message}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block tracking-wide text-lg mb-1 text-gray-600">
                Password
              </label>
              <input
                {...register("password")}
                className="appearance-none block w-full bg-white  text-gray-700 border border-gray-300 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                {errors.password?.message}
              </p>
              <label className="label">
                <span className="text-sm">
                  Don't hava a account{" "}
                  <Link
                    to="/register"
                    className="underline underline-offset-4 text-blue-500 hover:text-blue-400 "
                  >
                    {" "}
                    Register
                  </Link>
                </span>
              </label>
            </div>
          </div>
          <button
            disabled={isSubmitting}
            className="disabled:opacity-60  capitalize w-full rounded-md bg-teal-600  px-3 text-lg font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 py-3 mt-6 "
            type="submit"
          >
            {isSubmitting ? "logging..." : "Log in"}
          </button>
        </form>
      </div>
    </>
  );
}
