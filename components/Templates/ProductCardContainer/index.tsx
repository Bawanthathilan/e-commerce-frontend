import React, { useEffect , useState } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import ProductCard from "@/components/Organisms/ProductCard";
import { getAllProductRequest } from "@/redux/reducers/ProductReducers";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Molecules/Pagination";

const ProductCardContainer = () => {
  const dispatch = useAppDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage , setCurrentPage]= useState(1);

  useEffect(()=>{
    dispatch(getAllProductRequest(currentPage));
  },[currentPage])

  

  const {listAllProductsData}:any = useAppSelector(
    (state) => state.product
  );

  useEffect(()=>{
    setTotalPages(Math.ceil(listAllProductsData?.count / 10))
  },[currentPage])

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 ">
        {listAllProductsData?.data?.length > 0 && listAllProductsData?.data.map((product:any , index:number) => (
          <React.Fragment key={index}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </div>
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem className=" cursor-pointer">
            <PaginationPrevious onClick={handlePrevPage} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{currentPage}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className=" cursor-pointer" onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductCardContainer;
