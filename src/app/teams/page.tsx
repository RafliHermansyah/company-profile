import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Teams() {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full">
          <div className="w-full h-full py-20 flex flex-wrap justify-center items-center gap-2 ">
            <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 rounded-lg border-[tomato] border-2 h-[32rem]">
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/images/pp1.jpg"
                  alt="pest1"
                  width="200"
                  height="100"
                  className="rounded-lg pt-5"
                ></Image>
              </div>

              <div className="w-full h-full text-center flex flex-col gap-4 relative">
                <h1 className="uppercase text-lg font-light italic">
                  Sales Manager
                </h1>

                <h2 className="text-xl capitalize font-semibold">
                  Entis Sutisna
                </h2>

                <p className="text-justify">
                  Facing any pest issue? Want to find out more about our
                  service? Our Sales Team consists of 4 Sales Consultants and
                  can provide help and expertise with your pest-related queries.
                </p>

                <button className="w-[60%] mx-auto bg-[tomato] text-white rounded-3xl px-4 py-2">
                  Follow
                </button>
              </div>
            </div>
            <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 shadow-lg rounded-lg border-[tomato]  border-2 h-[32rem]">
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/images/pp2.jpg"
                  alt="pest1"
                  width="200"
                  height="100"
                  className="rounded-lg pt-5"
                ></Image>
              </div>

              <div className="w-full h-full text-center flex flex-col gap-4 relative ">
                <h1 className="uppercase text-lg font-light italic">
                  Service Manager
                </h1>
                <h2 className="text-xl capitalize font-semibold ">
                  Jajat Sudrajat
                </h2>

                <p className="text-justify">
                  As the Service Manager, Cheryl oversees the team of
                  Supervisors and Technicians at Nohama Pest Control. He is in
                  charge of ensuring that your friendly pest management
                  Technicians deliverthe best service.
                </p>
                <button className="w-[60%] mx-auto bg-[tomato] text-white rounded-3xl px-4 py-2">
                  Follow
                </button>
              </div>
            </div>
            <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 shadow-lg  border-[tomato] border-2  rounded-lg h-[32rem]">
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/images/pp4.jpg"
                  alt="pest1"
                  width="200"
                  height="100"
                  className="rounded-lg pt-5"
                ></Image>
              </div>

              <div className="w-full h-full text-center flex flex-col gap-4 relative  ">
                <h1 className="uppercase text-lg font-light italic">
                  Technical Manager
                </h1>

                <h2 className="text-xl capitalize font-semibold ">
                  Asep Jurasep
                </h2>

                <p className="text-justify">
                  Dr. Asep Jurasep is our Technical Manager at Nohama Pest
                  Control Pte Ltd and an elected Pi Chi Omega Entomologist. He
                  graduated with a PhD in Nature Science, studied termites and
                  other urban pests.
                </p>

                <button className="w-[60%] mx-auto bg-[tomato] text-white rounded-3xl px-4 py-2">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer backgroundColor="bg-[tomato]" textColor="text-white" />
    </>
  );
}
