import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

export default function Header() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  console.log({ user });
  const handleLogout = () => {
    // const { setuser } = useUser();
    localStorage.removeItem("user");
    //console.log("loggged out");
    navigate("/");
    location.reload();
  };

  return (
    <>
      {/* <TextScrolling/> */}
      <div className="navbar sticky top-0 z-50 drop-shadow bg-white">
        <div className=" navbar-start ">
          <ul
            tabIndex={0}
            className="mt-3 p-2 flex  bg-white rounded-box w-52 lg:flex-grow"
          >
            <li className="ml-10 ">
              <Link to="/" className="text-gray-600">
                Home
              </Link>
            </li>
            <li className="ml-10 ">
              <Link to="/about" className="text-gray-600">
                About Us
              </Link>
            </li>
            <li className="ml-10 ">
              <a>Plans</a>
            </li>
            <li className="ml-10 ">
              <a>Careers</a>
            </li>
          </ul>
          {/* <div className="dropdown">
            <div id="nav-toggle" className="block lg-hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
            <div
              className="w-full block flex-grow lg:flex lg:items-start lg:w-auto"
              id="nav-content"
            >
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 lg:flex-grow"
              >
                <li className="ml-10 block mt-4 lg:inline-block lg:mt-0 ">
                  <Link to="/" className="text-gray-600">
                    Home
                  </Link>
                </li>
                <li className="ml-10 block mt-4 lg:inline-block lg:mt-0 ">
                  <Link to="/about" className="text-gray-600">
                    About Us
                  </Link>
                </li>
                <li className="ml-10 block mt-4 lg:inline-block lg:mt-0 ">
                  <a>Plans</a>
                </li>
                <li className="ml-10 block mt-4 lg:inline-block lg:mt-0 ">
                  <a>Careers</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="navbar-center">
          <a className=" normal-case text-5xl Logo text-gray-500">
            Slice of Sin
          </a>
        </div>
        <div className="navbar-end mr-6">
          <div className="dropdown dropdown-end ">
            {user ? (
              <div className="flex items-center">
                <div className="mr-2 username text-center">
                  <p>Hello {user?.userBody?.username}</p>
                </div>
                <div className="menu">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {/* <img src="src/assets/images/profile_pic.png" /> */}

                      <img
                        src={
                          user.userBody.avatar.url === ""
                            ? "https://digilander.libero.it/Ictszu/rev4.0/avatar.jpg"
                            : user?.userBody?.avatar?.url
                        }
                      />

                      {/* <img src="https://yt3.ggpht.com/a/AGF-l79E55UZW_ujepY_0FCabPGEzJyTB3W5la8taA=s900-c-k-c0xffffffff-no-rj-mo" /> */}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="navEnd p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52  text-gray-600"
                  >
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                      {/* <a>Logout</a> */}
                    </li>
                    <li>
                      <button>Profile</button>
                      {/* <a>Logout</a> */}
                    </li>
                    {/* <li>
                      <Link to="/login" className="active:bg-teal-400">
                        {" "}
                        Login
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link to="/login">
                  <button className="text-gray-800 px-3 cursor-pointer  py-2  text-bold">
                    Sign in
                  </button>
                </Link>
                <Link to="/register">
                  <button className=" hover:text-white  text-white  px-3 cursor-pointer  order-solid border-2 border-black rounded-sm py-2 bg-black  ">
                    Sign up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
