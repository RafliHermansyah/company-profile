import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "700"],
  style: ["italic"],
});

export default function Quotes() {
  return (
    <>
      <div className="bg-[tomato] h-[30rem] flex items-center justify-center ">
        <div className="px-16">
          <h1
            className={`text-xl md:text-2xl lg:3xl bg-gray-50 py-2 px-2 ${raleway.className}`}
          >
            "For more than 40 years we have been working with Rentokil pest
            control to our full satisfaction"
          </h1>
          <p className={`m-1 md:text-lg ${raleway.className} mt-5`}>
            Budi Budadi, <span className="font">PT Maju Jaya Indonesia</span>
          </p>
        </div>
      </div>
    </>
  );
}
