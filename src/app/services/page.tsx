import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br">
        <div className="mx-auto lg:w-3/4  px-6 py-12 text-justify">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">What We Do</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold  mb-4">
                Mosquito Fogging Services
              </h2>
              <p className="text-gray-700">
                Our mosquito fogging services are the perfect solution for
                controlling mosquitoes in your area. Our experienced technicians
                uses fine mist or fog of specially formulated environmentally
                friendly pesticides to target and eliminate adult mosquitoes.
                Safe for humans and pets, our pesticides are all natural. We use
                state-of-the-art equipment for the applic
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold  mb-4">
                Anti – Microbial Disinfection process
              </h2>
              <p className="text-gray-700">
                A residual misting that is completely water-based is first
                applied to ensure a lasting result. One of the most active
                ingredients is called Benzalkonium chloride (also known as Alkyl
                dimethyl benzyl ammonium chloride). We then use our exclusive
                ozone machine to emit ozone into the surrounding air, thus
                effectively cleansing the air, as well as any and all surfaces
                that it reaches upon contact. Our team will even bring a
                certificate to show that your home is in good hands.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold  mb-4">
                Professional Bed Bug Treatment
              </h2>
              <p className="text-gray-700">
                Are you dealing with a bed bug infestation? Our expert pest
                control services are here to provide a swift and effective
                solution. Our professional team specializes in targeted bed bug
                treatment to eradicate these pests from your home, ensuring a
                safe and comfortable environment for you and your family. We
                implement a targeted treatment plan using industry-approved
                methods to eliminate bed bugs efficiently.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold  mb-4">
                Flies Control Services
              </h2>
              <p className="text-gray-700">
                We understand that flies can be a major nuisance and can pose
                health risks, especially when they are present in areas where
                food is prepared or consumed. That’s why we take a comprehensive
                approach to fly pest control, starting with a thorough
                inspection of your property to identify the root cause of the
                infestation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer backgroundColor="bg-[tomato]" textColor="text-white" />
    </>
  );
}
