import Image from "next/image";

const Survery = () => {
  return (
    <div id="about" className="container pt-40">
      <div className="flex flex-col-reverse lg:flex-row gap-20">
        <div>
          <Image
            src="/survey.png"
            alt="Survey Image"
            width={1000}
            height={600}
            className="w-[100%] h-auto lg:w-[130vw] lg:h-[70vh]"
          />
        </div>

        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </h2>

          <p className="text-gray-700 pt-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </p>

          <p className="text-gray-700 pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survery;
