// import Image from "next/image";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center md:flex-row text-justify lg:h-[35rem] my-10">
        <div className="px-10 py-1 w-full">
          <h1 className={`${roboto.className} text-2xl md:text-4xl mb-5`}>
            About <span className="text-[tomato]">NOHAMA</span>
          </h1>
          <div className={`${inter.className} md:text-xl`}>
            <p>
              For over 95 years, Nohama has been at the forefront of innovative
              pest control, safeguarding people and enhancing lives with our
              expert pest management solutions.
            </p>
            <p>
              As the world’s most recognised commercial pest control brand and a
              leading residential pest control provider, we operate in over 80
              countries with a network of 1,800 local branches. Our mission is
              to protect people, enhance lives and preserve our planet.
            </p>
            <p>
              Nohama offers a comprehensive suite of pest control services
              tailored for both commercial and residential properties. Our
              solutions combat a wide range of pests, including rodents, flies,
              stored product insects, and more, utilising the latest in pest
              control technology to ensure effective prevention and management.
              At the heart of our service is Integrated Pest Management (IPM), a
              customer-centric approach that combines innovative pest control
              strategies with eco-friendly practices. Our pest management
              solutions are designed to offer maximum protection, aligning with
              health and safety standards in pest control.
            </p>
          </div>
        </div>
        <div className=" ">
          <Image
            src="/images/pest1.jpg"
            alt="pest1"
            width={500}
            height={200}
            className="rounded-lg"
          ></Image>
        </div>
      </div>
      <Footer backgroundColor="bg-[tomato]" textColor="text-white" />
    </>
  );
}

// i have this about page, there are 2 parts, left parts (text) and right part (image), i set the default as flex-col, and when in medium it will be flex-row, so the text and the image will be side to side, but on the breakpoint md the text and the image are not equal, the image is shown little, but when i stretch it to more big (lg, xl), the size is equal
