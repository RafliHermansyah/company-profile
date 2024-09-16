import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex items-center gap-8 lg:flex-justify lg:flex flex-col lg:flex-row lg:justify-evenly">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">The global experts in</span>
              <span className="block text-[tomato] capitalize">
                pest control
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Nohama is the world's largest pest contorl company, offering the
              broadest, most advance range of pest conrol solutions and services
              in the industry.
            </p>
            <div className=" ">
              <button className="border-2 border-black bg-gray-100  px-5 py-2 text-[25px] mt-6 rounded-lg hover:bg-gray-300">
                Contact your local specialist
              </button>
            </div>
          </div>

          <div className="">
            <Image
              src="/images/pest3.jpg"
              alt="Pest Control"
              width={500}
              height={200}
              className="rounded-md "
            ></Image>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

// why is the image pest.3 not showing in my vercel.app, other images in the web is showing normally
