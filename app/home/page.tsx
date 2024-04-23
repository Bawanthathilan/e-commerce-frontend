"use client";
import React, { useEffect } from "react";
import ProductCard from "@/components/Molecules/ProductCard";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";

import { getAllProductRequest } from "@/redux/reducers/ProductReducers";


const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProductRequest());
  }, []);

  const allProducts = useAppSelector(
    (state) => state.product.listAllProductsData
  );

  return (
    <div className=" mt-14">
      <div className="grid grid-cols-4 gap-5 ">
        {allProducts.map((item) => (
          <>
            <ProductCard title={item.name} description={item.description} key={item.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
