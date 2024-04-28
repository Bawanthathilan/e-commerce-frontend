import React, {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import ProductCard from '@/components/Organisms/ProductCard';
import { getAllProductRequest } from "@/redux/reducers/ProductReducers";

const ProductCardContainer = () => {

    const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProductRequest());
  }, []);

  const allProducts = useAppSelector(
    (state) => state.product.listAllProductsData
  );
  return (
    <div>
         <div className="grid grid-cols-4 gap-5 ">
        {allProducts.map((product) => (
          <>
            <ProductCard product={product} />
          </>
        ))}
      </div>
    </div>
  )
}

export default ProductCardContainer