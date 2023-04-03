import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

import UserContext from "../contexts/userContext";

const MAX_FILE_SIZE = 10485760;

const validFileExtensions = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

const schema = yup.object().shape({
  title: yup.string().required("Please fill out this field.").min(4),
  description: yup.string().required("Please fill out this field.").min(4),
  recipe: yup.string().required("Please fill out this field."),
  file: yup
    .mixed()
    .required()
    .test("length", "Please choose an image.", (value) => value.length === 1),
});
export default function PostForm(props) {
  const { user } = useContext(UserContext);
  const notify = () => toast.success("Post is Created Scuccessfully");
  const { access_token: token } = user;
  const navigate = useNavigate();
  const { id } = useParams();

  const { title, description, recipe, image, pageTitle } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { title, description, recipe },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    //console.log({ data });
    formData.append("file", data.file[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("recipe", data.recipe);

    if (title && description && recipe) {
      formData.append("image", JSON.stringify(image));

      const res = await axios.patch(
        `https://slice-of-sin-backend.onrender.com/v1/post/${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        toast.success("Post is updated Scuccessfully");
      }
    } else {
      formData.append("user", user.userBody._id);
      console.log({ title: data.title });
      const res = await axios.post(
        "https://slice-of-sin-backend.onrender.com/v1/post",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log({ res });
      if (res.status === 200) {
        console.log("in toast");
        toast.success("Your post is created successfully!");
      }
    }

    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="container mx-auto m-auto">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <h1 className="text-gray-500 text-4xl ">{pageTitle}</h1>
              <div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-500">
                    Post Title
                  </label>
                  <div className="mt-2 flex flex-wrap rounded-md shadow-sm">
                    <input
                      {...register("title")}
                      type="text"
                      placeholder="  Type your title here..."
                      className="input input-bordered w-full bg-white text-sm"
                    />
                    <p className="text-red-500 text-xs mt-2 italic">
                      {errors.title?.message}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-500">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    {...register("description")}
                    rows="3"
                    placeholder="Type your description here..."
                    className="textarea textarea-bordered textarea-lg  bg-white text-sm w-full"
                  ></textarea>
                  <p className="text-red-500 text-xs italic">
                    {errors.description?.message}
                  </p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-500">
                  Recipe
                </label>
                <div className="mt-2">
                  <textarea
                    {...register("recipe")}
                    rows="3"
                    placeholder="Type your body description here..."
                    className="textarea textarea-bordered textarea-lg  bg-white text-sm w-full"
                  ></textarea>
                  <p className="text-red-500 text-xs italic">
                    {errors.recipe?.message}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-500">
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input
                          {...register("file")}
                          id="file-upload"
                          type="file"
                          className="sr-only"
                        />
                       
                      </label>
                     
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-red-600 text-sm mt-2 italic mx-auto">
                          {errors.file?.message}
                        </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="disabled:opacity-60 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
