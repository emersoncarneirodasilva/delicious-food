"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Dash from "./Dash";
import MenuCard from "./MenuCard";

const appetizersData = [
  {
    id: 1,
    img: "/cake.jpg",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 2,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 3,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 4,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 5,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 6,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 7,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 8,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const breakfastData = [
  {
    id: 1,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 2,
    img: "/cake.jpg",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 3,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 4,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 5,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 6,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 7,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 8,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const saladsData = [
  {
    id: 1,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 2,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 3,
    img: "/cake.jpg",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 4,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 5,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 6,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 7,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 8,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const meatfishData = [
  {
    id: 1,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 2,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 3,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 4,
    img: "/cake.jpg",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 5,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 6,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 7,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 8,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const soupsData = [
  {
    id: 1,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 2,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 3,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 4,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 5,
    img: "/cake.jpg",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 6,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 7,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 8,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const dessertsData = [
  {
    id: 1,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 2,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 3,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 4,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 5,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 6,
    img: "/cake.jpg",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 7,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 8,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const drinksData = [
  {
    id: 1,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 2,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 3,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 4,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 5,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 6,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 7,
    img: "/cake.jpg",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    id: 8,
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const Menu = () => {
  const [active, setActive] = useState(1);
  const [image, setImage] = useState("/appetizers.png");

  useEffect(() => {
    if (active === 1) {
      setImage("/appetizers.png");
    }
    if (active === 2) {
      setImage("/breakfast.png");
    }
    if (active === 3) {
      setImage("/salads.png");
    }
    if (active === 4) {
      setImage("/meat&fish.png");
    }
    if (active === 5) {
      setImage("/soups.png");
    }
    if (active === 6) {
      setImage("/desserts.png");
    }
    if (active === 7) {
      setImage("/drinks.png");
    }
  }, [active]);

  const handleActive = (id: number) => {
    return setActive(id);
  };

  return (
    <div id="dish" className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
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

      <ul className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-7 md:gap-10 lg:gap-20 w-fit mx-auto mt-10">
        <li
          className={`${
            active === 1 ? "bg-accent text-white p-1" : ""
          } cursor-pointer`}
          onClick={() => handleActive(1)}
        >
          Appetizers
        </li>
        <li
          className={`${
            active === 2 ? "bg-accent text-white p-1" : ""
          } cursor-pointer`}
          onClick={() => handleActive(2)}
        >
          Breakfast
        </li>
        <li
          className={`${
            active === 3 ? "bg-accent text-white p-1" : ""
          } cursor-pointer`}
          onClick={() => handleActive(3)}
        >
          Salads
        </li>
        <li
          className={`${
            active === 4 ? "bg-accent text-white p-1" : ""
          } cursor-pointer`}
          onClick={() => handleActive(4)}
        >
          Meat & Fish
        </li>
        <li
          className={`${
            active === 5 ? "bg-accent text-white p-1" : ""
          } cursor-pointer`}
          onClick={() => handleActive(5)}
        >
          Soups
        </li>
        <li
          className={`${
            active === 6 ? "bg-accent text-white p-1" : ""
          } cursor-pointer`}
          onClick={() => handleActive(6)}
        >
          Desserts
        </li>
        <li
          className={`${
            active === 7 ? "bg-accent text-white p-1" : ""
          } cursor-pointer`}
          onClick={() => handleActive(7)}
        >
          Drinks
        </li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 items-center pt-10">
        <div className="w-fit mx-auto">
          <Image
            src={`${image}`}
            alt="Menu"
            width={500}
            height={500}
            className="w-[100%] max-w-[400px] h-auto"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 w-fit mx-auto">
          {active === 1 &&
            appetizersData.map((item) => (
              <MenuCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            ))}

          {active === 2 &&
            breakfastData.map((item) => (
              <MenuCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            ))}

          {active === 3 &&
            saladsData.map((item) => (
              <MenuCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            ))}

          {active === 4 &&
            meatfishData.map((item) => (
              <MenuCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            ))}

          {active === 5 &&
            soupsData.map((item) => (
              <MenuCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            ))}

          {active === 6 &&
            dessertsData.map((item) => (
              <MenuCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            ))}

          {active === 7 &&
            drinksData.map((item) => (
              <MenuCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
