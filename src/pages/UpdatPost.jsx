import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import PostForm from "../Components/PostForm";
import axios from "axios";

export default function UpdatePost() {
  const [post, setPost] = useState();

  // const location = useLocation();
  // const id = location.pathname.split("/")[3];

  const { id } = useParams();
  const fetchPost = async () => {
    const { data: res } = await axios.get(
      `http://localhost:3000/v1/post/${id}`
    );
    setPost(res.data);
    //console.log({ post });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  //  loadeer here
  if (!post) return "loading";

  const { title, description, recipe, image } = post;

  return (
    <>
      <PostForm
        title={title}
        description={description}
        recipe={recipe}
        image={image}
        pageTitle="Update Your Post"
      />
    </>
  );
}
