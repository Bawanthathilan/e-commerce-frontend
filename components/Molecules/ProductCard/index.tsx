import React from "react";
import Image from "next/image";
import PlaceholderImg from "@/assets/placeholder.png";
import { Badge } from "@/components/Atoms/Badge";
import { CirclePlus } from 'lucide-react';

import { useAppDispatch } from "@/hooks/reduxHooks";

import { addToCartRequest } from "@/redux/reducers/CartReducers";

interface ProductCardI {
  product:any
}



const ProductCard = ({ product }: ProductCardI) => {
  const dispatch = useAppDispatch()
  const tagList = product.tags?.split(',')  

  const addToCart = (data:any) => {
    dispatch(addToCartRequest(data))
  }

  return (
    <div className="border-2 px-2 py-3 flex flex-col gap-4 rounded-md cursor-pointer">
      <div className=" relative w-full h-[200px]">
        <Image
          src={PlaceholderImg}
          fill
          alt={product.name}
          className=" object-cover"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-lg">{product.name}</h1>
        <p className=" text-gray-600 text-sm">{product.description}</p>
      </div>

      <div className="flex flex-row gap-2">
        {tagList?.map((tag:any , i:number)=>(
          <Badge key={i}>{tag}</Badge>
        ))}
      </div>

      <div className="flex flex-col gap-5">
      <CirclePlus color="black" size={25} onClick={()=>
        addToCart({
          productId:product.id,
          quantity:1,
        })
      } />
      </div>
    </div>
  );
};

export default ProductCard;
