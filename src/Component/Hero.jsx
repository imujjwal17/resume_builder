import Button from "./button";
import Banner from "../assets/Banner.png";

const Hero = () => {
  return (
    <section className="flex p-8 md:p-10 min-h-screen flex-col md:flex-row">
      <div className="flex flex-col justify-center p-6 md:p-10 w-full max-container md:mt-10 md:ml-auto">
        <p className="text-sm md:text-xl rounded-full bg-blue-100 w-fit p-2 font-poppins text-blue-500 md:text-center">
          <span className="text-coral-red">$ </span>Discover the easiest way to
          build your CV
        </p>
        <h1 className="font-bold text-2xl md:text-4xl mt-4 md:mt-7 text-blue-900">
          <span>Online CV Builder With</span>
          <br />
          <span>Creative Templates.</span>
        </h1>
        <p className="w-full md:w-[500px] text-sm md:text-xl mt-2 md:mt-5 text-gray-500 gap-4">
          Our Perfect resume builder takes the hassle out of resume writing.
          Choose from several templates and follow easy prompts to create the
          perfect job-ready resume.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-6 text-sm text-white">
          <Button title="CHOOSE TEMPLATE" />
          <Button title="CONTACT US" />
        </div>
      </div>
      <div className="mt-8 md:mt-20 ml-4 md:ml-24 p-4 md:p-20">
        <img src={Banner} alt="home-banner" className="w-full md:w-[1100px] h-[350px] object-cover" />
      </div>
    </section>
  );
};

export default Hero;
