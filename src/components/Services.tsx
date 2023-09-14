import Dash from "./Dash";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: 1,
    img: "/services__1.png",
    title: "Professonal Kitchen",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    id: 2,
    img: "/services__2.png",
    title: "Delivery",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    id: 3,
    img: "/services__3.png",
    title: "Wine List",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    id: 4,
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="w-fit mx-auto text-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-10 md:gap-4 pt-8">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
