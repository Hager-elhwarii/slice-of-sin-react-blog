import React, { useState, useEffect, useContext } from "react";

import CreatePostBtn from "../Components/CreatePostBtn";
import PostCard from "../Components/PostCard";
import DownArrow from "../Components/DownArrow";
import UserContext from "../contexts/userContext";
import GetStarted from "../Components/GetStarted";
import ShopNow from "../Components/ShopNow";
import Loader from "../Components/Loader";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const API = "https://slice-of-sin-backend.onrender.com/v1/post";

  console.log({ posts });
  const fetchPosts = async () => {
    const { data: res } = await axios.get(API);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDeleteRender = (id) => {
    setPosts(posts.filter((post) => post._id !== id));
  };

  if (!posts) return <Loader />;
  return (
    <>
      <div
        className="hero min-h-min relative  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url("https://res.cloudinary.com/mps/image/upload/v1489664791/gdmda85ywclxr4yhngtj.jpg")`,
        }}
      >
        {user ? <CreatePostBtn /> : ""}

        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-20  font-bold text-8xl text-transparent">
              Our Recipes
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-20 capitalize text-gray-500 text-3xl sm:text-5xl  xl:text-6xl title">
          {" "}
          simple recipes made for
        </h1>
        <h1 className="text-center md:mt-10 capitalize text-2xl sm:text-4xl  xl:text-5xl homeTitle mb-40">
          real, actual, everyday life.
        </h1>
        <div className="flex flex-col items-center  createBtn mb-14 ">
          <DownArrow />
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-6 max-w-[1500px] gap-6 ">
        {posts.map((post, index) => {
          let newPost = false;
          if (index === 0) {
            newPost = true;
          }
          return (
            <PostCard
              key={post._id}
              id={post._id}
              title={post.title}
              authorThumbnail={post?.author?.avatar?.url}
              authorId={post.author?._id}
              authorName={post.author.username}
              background={post.image.url}
              description={post.description}
              handleDeleteRender={handleDeleteRender}
              isNew={newPost}
            />
          );
        })}
      </div>
      <GetStarted />
      <ShopNow />
    </>
  );
}
