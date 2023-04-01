export default function About() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  src="https://i.pinimg.com/originals/24/1b/30/241b30740af37e878d08fd2bed6f79c2.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-gray-700">About Us</h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Aliquid, molestiae!
                  Quidem est esse numquam odio deleniti, beatae, magni dolores
                  provident quaerat totam eos, aperiam architecto eius quis
                  quibusdam fugiat dicta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
