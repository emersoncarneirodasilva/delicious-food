import Image from "next/image";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div id="food" className="container pt-0 md:pt-40 lg:pt-10">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Feature <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi
        animi hic sequi voluptatibus praesentium sunt incidunt explicabo
        asperiores eum nobis.
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            src="/grid__1.png"
            alt="Grid Image"
            width={300}
            height={600}
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Shrimp Salad</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto">
          <Image
            src="/grid__2.png"
            alt="Grid Image"
            width={500}
            height={900}
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Baked Apples</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto self-end">
          <Image
            src="/grid__3.png"
            alt="Grid Image"
            width={300}
            height={600}
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Cherries Chicken</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
