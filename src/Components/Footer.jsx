import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <section className="bg-black">
        <div className="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="font-extrabold leading-10 tracking-tight  text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl">
            <span className="inline md:block">Join Us</span>
            <br/>
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              {" "}
              Baking Made

              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                {" "}
                Easy
              </span>{" "}
            </span>
          </h1>
          <div className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
            <Link to="/register">
            <button className="bg-tkb border text-sm text-white py-3 px-7 rounded-full">
              Sign Up
            </button>
            </Link>
           
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <p className="mt-4 text-sm text-center text-gray-400 lg:text-left lg:mt-0">
               <u className="flex no-underline	list-none">
               <li className="ml-10 ">
              <Link to="/" className="text-gray-400 bold hover:text-gray-600 ">
                Home
              </Link>
            </li>
            <Link to="/gallery" className="text-gray-400 ">
              <li className="ml-10 ">Gallery</li>
            </Link> 
            <li className="ml-10 ">
              <Link to="/about" className="text-gray-400">
                About Us
              </Link>
            </li>
           
            <li className="ml-10 ">
              <Link to="/login" className="text-gray-400">
                Log in
              </Link>
            </li>
          
               </u>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
