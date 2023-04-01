import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import Loader from "./Loader";
export default function FullPostCard() {
  const [post, setPost] = useState(null);

  // const location = useLocation();
  // const id = location.pathname.split("/")[2];

  const { id } = useParams();
  console.log({ post });
  useEffect(() => {
    //console.log("in");
    fetchPost();
    //console.log({ id });
    //console.log({ post });
  }, []);

  const fetchPost = async () => {
    let { data: res } = await axios.get(
      `https://slice-of-sin-backend.onrender.com/v1/post/${id}`
    );
    //console.log({ res: res.data.image.url });
    setPost(res.data);
  };

  //  return <Loader/>

  if (!post) return <Loader />;

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full bg-white  rounded mt-20  shadow-xl  mb-32">
      <div className="w-full lg:w-1/2">
        <div
          aria-label="card"
          className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6"
        >
          <div className="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
            <div className="flex">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full object-fill h-auto  scale-100 hover:scale-110 cursor-pointer ease-in duration-300  ">
                  <img src={post.author.avatar.url} />
                </div>
              </label>
              <div>
                <p className="ml-2 mt-2">{post.author.username}</p>
              </div>
            </div>
          </div>
          {/* <a tabIndex="0" className="focus:outline-none focus:underline focus:text-gray-500 hover:text-gray-500 cursor-pointer text-gray-800 dark:text-gray-100" ><h2 className=" mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold">CES - The Global Stage for Innovation</h2></a>  */}
          <h2 className="card-title text-5xl font-bold mb-6 text-gray-600 mt-6">
            {post.title}
          </h2>

          <p className="text-gray-500">
            {/* easy fluffy vanilla pancake recipe made from everyday ingredients
            but with delicious pops of fresh strawberry in every bite!Just like
            I said,Ingredients you will need you only need pantry basics (flour,
            baking powder, egg, milk, vanilla essence, a little sugar, and salt)
            to make these strawberry pancakes, oh, and of course you are also
            going to need strawberries! */}
            {post.description}
            <br />
            <br />
            {/* Step by step instructions : Whisk together the dry ingredients. Melt
            the butter, (I do this in a microwave-proof jug, that's large enough
            to hold all the wet ingredients, which means fewer dishes!) Whisk
            together the wet ingredients (melted butter, egg, vanilla, milk).
            Add the wet ingredients to the dry ingredients, whisk them until
            well combined. . There may be a few lumps, don't worry about these.
            Leave the batter to rest for 10 mins While the batter is resting,
            dice the strawberries into 1cm cubes (make sure you remove the
            leaves lol.) . Fold the diced strawberries into the pancake batter.. */}
            {post.recipe}
          </p>

          <div className="flex lg:items-center items-start flex-col lg:flex-row mt-4">
            <div className="flex items-center">
              <div className="border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                <img
                  className="w-full h-full overflow-hidden object-cover rounded-full"
                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg"
                  alt="avatar"
                />
              </div>
              <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                <img
                  className="w-full h-full overflow-hidden object-cover rounded-full"
                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg"
                  alt="avatar"
                />
              </div>
              <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                <img
                  className="w-full h-full overflow-hidden object-cover rounded-full"
                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg"
                  alt="avatar"
                />
              </div>
              <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                <img
                  className="w-full h-full overflow-hidden object-cover rounded-full"
                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg"
                  alt="avatar"
                />
              </div>
              <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                <img
                  className="w-full h-full overflow-hidden object-cover rounded-full"
                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg"
                  alt="avatar"
                />
              </div>
              <a
                tabIndex="0"
                className="cursor-pointer text-gray-600 focus:outline-none focus:underline focus:text-gray-400 hover:text-gray-500"
              >
                <p className=" dark:text-gray-400 text-xs font-normal ml-1">
                  +12 Viewers
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="px-5 lg:px-5 md:px-10 py-3 lg:py-4 flex flex-row items-center justify-between border-t border-gray-300">
          <div className="flex items-center">
            {/* so the share and save icons are at the end */}
          </div>
          {/* <div className="flex items-center">
            <button
              aria-label="save"
              className="focus:outline-none focus:text-sky-400 hover:text-sky-500  text-sky-600 dark:text-sky-400  cursor-pointer mr-4"
            >
              <EditIcon />
            </button>
            <button
              aria-label="share"
              className="text-red-700 dark:text-red-600  hover:text-red-500  focus:outline-none focus:text-red-500 cursor-pointer"
            >
              <DeleteIcon />
            </button>
          </div> */}
        </div>
      </div>
      <div className="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
        <img
          className="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none  cursor-pointer "
          src={post.image.url}
          alt="banner"
        />
      </div>
    </div>
  );
}
