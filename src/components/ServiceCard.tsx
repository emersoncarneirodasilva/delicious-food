import Image from "next/image";

interface ServiceCardProps {
  img: string;
  title: string;
  desc: string;
}

const ServiceCard = ({ img, title, desc }: ServiceCardProps) => {
  return (
    <div>
      <div className="text-center space-y-3">
        <Image
          src={img}
          alt={title}
          width={70}
          height={70}
          className="mx-auto"
        />

        <div className="uppercase">
          {title}
          <div className="flex gap-2 w-fit mx-auto mt-2">
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
          </div>
        </div>

        <p className="text-[14px] text-gray-700">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
