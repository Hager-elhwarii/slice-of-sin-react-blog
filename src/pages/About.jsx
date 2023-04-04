export default function About() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16 rounded-full">
              <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden ">
                <img
                  src="https://i.ibb.co/ky603gN/Saf.gif"
                  className="absolute inset-0 h-full w-full object-cover scale-100 hover:scale-110 cursor-pointer ease-in duration-300 "
                />
              </div>
            </div>

            <div className="relative flex items-center  bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-4xl text-gray-700">
                  About Us
                </h2>

                <p className="mt-4 text-gray-600 text-xl">
                  Slice Of Sin is the trusted destination for bakers of all
                  levels to learn, be inspired, and share their enthusiasm for
                  baking with those they love. to the best recipes, content, tips
                  and tools, we bring baking to life in everything we do, so you
                  can do the same in your own home, We want to create, educate
                  and inspire you to become the best baker you can be, so we
                  never show you a cake without helping you make it, reveal a
                  product without a recipe, or recommend anything that doesn’t
                  make you and your baking better, Our recipes are scrumptious,
                  and like all good things in life are best enjoyed as part of a
                  balanced lifestyle. With that in mind, we create alternative
                  recipe options to suit your needs including reduced sugar,
                  no-nuts, gluten-free and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
