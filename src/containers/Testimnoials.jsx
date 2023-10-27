const Testimnoials = () => {
  return (
    <div id="testimonilas" className="py-24">
      <div className="container flex flex-col md:flex-row gap-16 text-base font-[500]">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-3">
            <h2 className="text-secondary uppercase">PARTNERS TESTIMONIAL</h2>

            <h1 className="font-semibold text-4xl md:text-5xl font-pt">
              Best Word From Our Partners
            </h1>
          </div>

          <div className=" mt-auto">
            <div className="p-5  text-grey text-lg space-y-8 bg-[#f3f4f4] rounded mt-6">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem ipsum ab enim nemo vero omnis voluptates nesciunt,
                ipsa nulla et! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequuntur, fugit.
              </p>

              <div>
                <h5 className="text-secondary">MARKETER</h5>
                <h3 className="font-semibold text-2xl font-pt">
                  Suzan Shakespare
                </h3>
              </div>
            </div>

            {/* sliders */}
            {/* <div className="flex mt-8 items-center gap-3">
              <div className={`h-2 w-7 bg-gray-500`} />
              <div className={`h-2 w-7 bg-gray-500`} />
              <div className={`h-2 w-7 bg-gray-500`} />
            </div> */}
          </div>
        </div>

        {/* image */}
        <div>
          <img src="images/t1.jpg" alt="" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Testimnoials;
