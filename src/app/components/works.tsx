import Image from "next/image";
import globepic from "./images/pngegg.png";
import ratspic from "./images/ratso.png";

export default function Works() {
  return (
    <>
      <div className="text-center p-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Why to choose us?
        </h2>

        <div className="flex flex-wrap items-center mt-20 text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <Image
              src={globepic}
              // Type 'StaticImageData' is not assignable to type 'string'. error
              alt="gem"
              className="inline-block rounded shadow-lg border border-merino-400"
              width="300"
            />
          </div>

          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 md:mt-0 text-[tomato] text-4xl lg:text-5xl ">
              Global yet local
            </h3>
            <p className="text-lg mt-6 lg:text-xl">
              We are everywhere, serving more locations than any other pest
              control provider, blending our 95-year legacy with local expertise
              in 1,800 teams worldwide.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20  text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <Image
              src={ratspic}
              alt="bulk editing"
              className="inline-block rounded shadow-lg border border-merino-400"
              width="300"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-4xl md:mt-0  text-[tomato] lg:text-5xl">
              Leading the digital pest control era
            </h3>
            <p className="sm:text-lg mt-6">
              Our pioneering PestConnect range offers constant protection, With
              innovation in our DNA, we anticipate, resolve and report pest
              risks seamlessly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
