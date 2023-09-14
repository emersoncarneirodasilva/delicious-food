import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/hero2.png"
        alt="Hero Background"
        width={1000}
        height={600}
        className="absolute top-0 right-0 h-auto lg:w-[580px] xl:w-[620px] -z-10"
      />

      <div className="container grid items-center h-[calc(100vh-120px)]">
        <div className="w-fit p-4 space-y-4 bg-[#ffffff98]">
          <p className="uppercase font-medium">Wide options of choice</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Delicious <span className="text-accent">Food</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] text-gray-700">
            Delicious food color, aroma and taste. <br />
            What are you waiting for?
          </p>

          <Link href="#dish">
            <button className=" mt-4 px-6 py-2 text-white bg-accent rounded-3xl cursor-pointer hover:tracking-wider hover:bg-white hover:text-accent transition-all duration-300">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
