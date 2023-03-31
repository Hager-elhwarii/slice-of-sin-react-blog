import { useContext } from "react";
import PostForm from "../Components/PostForm";
import UserContext from "../contexts/userContext";

export default function CreatePost() {
  return (
    <>
      <PostForm pageTitle="Create new Post" />
    </>
  );
}
