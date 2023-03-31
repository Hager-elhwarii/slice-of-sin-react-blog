import { Link } from "react-router-dom";

export default function CreatePostBtn() {
  return (
    <>
      <Link to="/recipe/create">
        <button className="btn btn-dark btn-xs sm:btn-sm md:btn-md lg:btn-lg  capitalize  cursor-pointer rounded-full m-auto fixed bottom-20 right-5 text-6xl z-50">
          +
        </button>
      </Link>
    </>
  );
}
