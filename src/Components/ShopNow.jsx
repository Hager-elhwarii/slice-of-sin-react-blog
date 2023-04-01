import { Link } from "react-router-dom";
export default function ShopNow() {
  return (
    <>
      <div className="p-6 py-12 bg-violet-400 text-gray-900">
        <div className="container mx-auto px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-4xl tracking-tighter font-bold">
              Fresh
              <br className="sm:hidden" /> Recipes 🥞
            </h2>

            <Link
              to="/register"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400"
            >
              Let's Bake
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
