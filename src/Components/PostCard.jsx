import { Link } from "react-router-dom";
import React, { useContext } from "react";

import UserContext from "../contexts/userContext";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import RightArrow from "./RightArrow";

export default function PostCard(props) {
  const { user } = useContext(UserContext);
  const {
    id,
    authorThumbnail,
    authorName,
    title,
    background,
    description,
    handleDeleteRender,
    authorId,
    isNew,
  } = props;

  const renderAuthorControl = () => {
    
    if (user?.userBody._id === authorId) {
     
      return (
        <div className="card-actions justify-end mt-9 ">
          <Link to={`/recipe/edit/${id}`} className="active:bg-teal-400 ">
            <EditIcon />
          </Link>
          <button>
            <DeleteIcon id={id} handleDeleteRender={handleDeleteRender} />
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <div className="min-w-100 shadow-xl mb-3 z-1 rounded-3xl h-full  ">
        <figure className="w-full h-80 overflow-hidden rounded-t-3xl  ">
          <Link to={`recipe/${id}`} id={id} className="text-center">
            <img
              src={background}
              alt="Shoes"
              className="scale-100 hover:scale-110 cursor-pointer ease-in duration-300 bgCard h-full w-full object-cover"
            />
          </Link>
        </figure>
        <div className=" py-2 px-6">
          <div className="flex my-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    authorThumbnail? authorThumbnail
                      : "https://digilander.libero.it/Ictszu/rev4.0/avatar.jpg"
                  }
                />
              </div>
            </label>
            <div>
              <p className="ml-2 mt-2 text-gray-500">{authorName}</p>
            </div>
          </div>
          <h2 className="card-title text-gray-600 text-3xl  hover:text-gray-500">
            <Link to={`recipe/${id}`} id={id} className="text-center">
              {title}
            </Link>
            {isNew ? <div className="badge badge-secondary">NEW</div> : ""}
          </h2>

          <p className="text-gray-500">{description}</p>
          <div className="flex justify-between align-middle">
            <Link to={`recipe/${id}`} id={id} className="text-center">
              <button className="mb-3 mt-6 flex justify-start text-center  hover:text-white  text-gray-500 dark:text-gray-500  cursor-pointer order-solid border-2 border-gray-400 w-40 rounded-sm py-2 hover:bg-black hover:border-black ease-in duration-300 ">
                <div className="flex m-auto">
                  <div>Read More</div>

                  <div>
                    {" "}
                    <RightArrow />{" "}
                  </div>
                </div>
              </button>
            </Link>
            {renderAuthorControl()}
          </div>
        </div>
      </div>
    </>
  );
}
