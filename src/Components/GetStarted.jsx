import { Link } from "react-router-dom";
export default function GetStarted() {
  return (
    <>
      <section className="mt-10">
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Delicious and easy desserts for the whole family!
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              To Simply Inspire shares simple and delicious recipes that are
              easy for any home cook to make. You’ll find a variety of wonderful
              recipes that the whole family will love.
            </p>
            <div className="flex flex-wrap justify-center">
              <a href="#">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                Get started
              </button>
              </a>
              <Link to="/about" className="text-gray-400">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
              >
                Learn more
              </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          src="https://i.ibb.co/94czYss/bg.gif"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
        />
      </section>
    </>
  );
}
