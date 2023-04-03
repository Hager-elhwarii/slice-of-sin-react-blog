
export default function Gallery() {
  return (
    <>
    <section className="overflow-hidden text-neutral-700">
  <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 mb-32 md:mb-">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center cursor-pointer ease-in duration-300 hover:rotate-2"
            src="https://live.staticflickr.com/8074/8384879838_3d71f7010f_b.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center cursor-pointer ease-in duration-300 hover:rotate-2"
            src="https://videos-cocina.com/wp-content/uploads/2017/03/mousee-de-mango-receta-de-postre.jpg" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center cursor-pointer ease-in duration-300 hover:rotate-2"
            src="https://floridastrawberry.org/wp-content/uploads/2011/09/Florida-Strawberry-Lemon-Tart.jpg" />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center cursor-pointer ease-in duration-300  hover:rotate-2"
            src="https://d1e3z2jco40k3v.cloudfront.net/-/media/flavorforecast/recipe-images/ff-q2-recipes/vegan_tres_leches_cake2000x1125.jpg?rev=-1&vd=00010101T000000Z&hash=253D8324D50DA0B0226BCF58DC315665" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center cursor-pointer ease-in duration-300 hover:rotate-2"
            src="http://gateaux-et-delices.com/wp-content/uploads/2016/04/Cr%C3%A8me-renvers%C3%A9e-au-caramel1.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center cursor-pointer ease-in duration-300 hover:rotate-2"
            src="https://littleveganbear.files.wordpress.com/2020/10/841a8-blueberry1.jpg" />
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
