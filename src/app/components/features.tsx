import FeaturesButton from "./featuresButton";

export default function Features() {
  return (
    <div className="bg-white p-4 min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        {/* <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div> */}
        {/* <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div> */}
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3  mt-12 text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-secondary"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h2 className="my- text-2xl font-bold text-black md:text-5xl">
            Our Work
          </h2>
          <p className="text-black text-2xl">
            Nohama brings expert, reliable and professional services to
            commercial customers all over the world.
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4 bg-[tomato]">
          {/* <div className="relative bg-[tomato] "> */}
          <div className="py-10 p-8 flex flex-col justify-between ">
            <div className="">
              <h5 className="text-3xl font-bold text-white">
                PEST RISK ASSESMENT
              </h5>
              <p className="text-black italic text-md  mt-5">
                A hassle-free survey and consultation
              </p>
            </div>
            <div className="">
              <FeaturesButton />
            </div>
          </div>
          {/* </div> */}
          {/* <div className=""> */}
          <div className="py-10 p-8 flex flex-col justify-between">
            <div className="">
              <h5 className="text-3xl font-bold text-white">PEST TREATMENT</h5>
              <p className="text-black italic text-md mt-5">
                Platform to create dynamic widgets for websites.
              </p>
            </div>
            <div>
              <FeaturesButton />
            </div>
          </div>
          {/* </div> */}
          {/* <div className="group relative bg-[tomato] flex flex-col justify-between h-full"> */}
          <div className="py-10 p-8 flex flex-col justify-between">
            <div className="">
              <h5 className="text-3xl font-bold text-white">PEST PROTECTION</h5>
              <p className="text-black italic text-md mt-5">
                Ensuring a clean, safe environment post-treatment
              </p>
            </div>
            <div>
              <FeaturesButton />
            </div>
          </div>
          {/* </div>s */}
          {/* <div className="group relative bg-[tomato] flex flex-col justify-between h-full"> */}
          <div className="py-10 p-8 flex flex-col justify-between">
            <div className="">
              <h5 className="text-3xl font-bold text-white">
                DIGITAL PEST CONTROL
              </h5>
              <p className="text-black italic text-md mt-5 ">
                A range of connected pest management solutions provide
                commercial customers with unrivalled data proactively prevent
                and manage pests.
              </p>
              <div>
                <FeaturesButton />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

// i want all the buttons to aligned horizontally from all the 4 cards
