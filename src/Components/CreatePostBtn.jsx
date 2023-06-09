import { Link } from "react-router-dom";

export default function CreatePostBtn() {
  return (
    <>
      <Link to="/recipe/create">
        <button className="bg-black mx-auto  w-14 h-14 rounded-full border-none capitalize  cursor-pointer  fixed md:bottom-20 bottom-15 right-5 text-3xl z-50">
          +
        </button>
      </Link>
    </>
  );
}
