import vanImgSection from "../assets/img-folder/vanImgSection.png"
const About = () => {
  return (
    <>
      <div className="">
        <img className="w-full" src={vanImgSection} alt="vanImgSection" />
      </div>
      <div className="text-center">
        <h1 className=" font-extrabold mt-20 space-x-8 text-5xl max-sm:text-2xl max-sm:px-4 md:text-5xl lg:text-5xl">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className=" text-[18px] max-sm:px-6 space-x-6 text-[#161616] font-medium leading-5 pt-16">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.  (Hitch costs extra 😉) </p>
        <p className=" text-[19px] max-sm:px-6 space-x-6 text-[#161616] font-medium leading-5"> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className="bg-[#FFCC8D] w-3/5 mt-8 mb-10 flex-col h-[198px] mx-auto">
        <h2 className=" mx-6 font-bold text-2xl pt-8">Your destination is waiting. Your van is ready.</h2>
        <div className="mt-8">
        <button className="text-white bg-black mx-6 p-4 font-bold text-base rounded-lg">Explore our vans</button>
        </div>
      </div>
    </>
  )
}

export default About