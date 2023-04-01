import axios from "axios";

export default function DeleteIcon({ id, handleDeleteRender }) {
  console.log("in delete icon");
  console.log({ id });
  const handleDelete = async () => {
    const { data } = await axios.delete(
      `https://slice-of-sin-backend.onrender.com/v1/post`,
      { data: { id } }
      // {
      //   headers: { Authorization: `Bearer ${token}` },
      // }
    );
    // //console.log({ data });
    handleDeleteRender(id);

    // setPosts(previousValue.filter((_id) => _id !== id));
  };
  return (
    <>
      <a href={`#my-modal-${id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6text-red-400 dark:text-red-400  hover:text-red-400  focus:outline-none focus:text-red-400 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </a>

      <div className="modal" id={`my-modal-${id}`}>
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-gray-700">Delete post</h3>
          <p className="py-4 text-gray-500">
            Are you sure you want to delete this post permanently?
          </p>
          <div className="flex justify-end gap-2">
            <div className="modal-action">
              <a
                href="#"
                className="btn btn-error text-white capitalize"
                onClick={handleDelete}
              >
                Yes
              </a>
            </div>
            <div className="modal-action">
              <a
                href="####"
                className="capitalize text-gray-800 btn btn-outline hover:bg-black hover:text-white ease-in duration-300"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
