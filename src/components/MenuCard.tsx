import Image from "next/image";

interface MenuCardProps {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const MenuCard = ({ img, title, desc, price }: MenuCardProps) => {
  return (
    <div className="flex gap-2">
      <Image
        src={img}
        alt="Dish"
        width={80}
        height={80}
        className="w-[80px] h-[80px]"
      />

      <div className="space-y-2">
        <div>
          <h2>{title}</h2>
          <p className="text-[14px] text-gray-600 pt-1">{desc}</p>
        </div>

        <p className="text-accent">{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
