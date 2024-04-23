import React from "react";
import Image from "next/image";
import PlaceholderImg from "@/assets/placeholder.png";
import { Badge } from "@/components/Atoms/Badge";

interface ProductCardI {
  title: string;
  description: string;
  tags?: string
}



const ProductCard = ({ title, description , tags }: ProductCardI) => {
  const tagList = tags?.split(',')  
  return (
    <div className="border-2 p-2 flex flex-col gap-4 rounded-md">
      <div className=" relative w-full h-[200px]">
        <Image
          src={PlaceholderImg}
          fill
          alt={title}
          className=" object-cover"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-lg">{title}</h1>
        <p className=" text-gray-600 text-sm">{description}</p>
      </div>

      <div className="flex flex-row gap-2">
        {tagList?.map((tag , i)=>(
          <Badge key={i}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
