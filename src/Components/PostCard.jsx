import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";

import UserContext from "../contexts/userContext";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import RightArrow from "./RightArrow";

export default function PostCard(props) {
  // const loggedUser = localStorage.getItem("user")
  //   const userId = loggedUser._id
  //  //console.log({userId});
  const { user } = useContext(UserContext);
  //console.log({ user });

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
    //console.log("in author control");
    if (user?.userBody._id === authorId) {
      //console.log({ user: user?.userBody._id, authorId });
      //console.log("in render ");
      return (
        <div className="card-actions justify-end mt-4 ">
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
      <div className="card min-w-100 shadow-xl mb-10 z-1 flex  justify-start ">
        <figure>
          <Link to={`recipe/${id}`} id={id} className="text-center">
            <img
              src={background}
              alt="Shoes"
              className="scale-100 hover:scale-110 cursor-pointer ease-in duration-300 "
            />
          </Link>
        </figure>
        <div className="card-body">
          <div className="flex">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={authorThumbnail} />
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
              <button className="flex justify-start text-center  hover:text-white  text-gray-600 dark:text-gray-600  cursor-pointer mt-2 order-solid border-2 border-gray-400 w-40 rounded-sm py-2 hover:bg-black hover:border-black ease-in duration-300 ">
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
