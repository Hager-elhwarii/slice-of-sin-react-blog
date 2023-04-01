import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Please fill out this field.").min(4),
  email: yup.string().email().required("Please fill out this field."),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
      "Password must contain at least one number and one special character."
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("No password provided."),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (body) => {
    try {
      const data = await axios.post(
        "https://slice-of-sin-backend.onrender.com/v1/auth/sign-up",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login");
    } catch (err) {}
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://cdn.quizly.co/wp-content/uploads/2018/02/24044755/1145.jpg")`,
        }}
      >
        <form
          className="w-full max-w-lg  mb-24 card px-10 py-6	shadow-2xl registerForm mt-20 bg-white  flex justify-start"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center text-4xl pb-4 text-gray-600">Register</h1>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block tracking-wide label-text text-sm mb-1  text-gray-600">
                Full Name
              </label>

              <input
                {...register("username")}
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300  rounded py-3 px-4 mb-1  leading-tight focus:outline-none focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Please enter your name..."
              />
              <p className="text-red-500 text-xs italic">
                {errors.username?.message}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-sm  mb-1 text-gray-600">
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
              <label className="block tracking-wide text-sm mb-1 text-gray-600">
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
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block  tracking-wide text-sm  mb-1 text-gray-600">
                Confirm Password
              </label>
              <input
                {...register("confirm_password")}
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                {errors.confirm_password?.message}
              </p>
              <label className="label">
                <span className="text-sm">
                  Already have an account{" "}
                  <Link
                    to="/login"
                    className="underline underline-offset-4 text-blue-500 hover:text-blue-400 "
                  >
                    Login
                  </Link>
                </span>
              </label>
            </div>
          </div>

          <button
            className="btn btn-accent text-xl capitalize w-full"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}
