"use client"
import React, {useEffect} from 'react'
import { Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow, } from '@/components/ui/table'
  import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
  import { getCartRequest } from "@/redux/reducers/CartReducers";


 const CartPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartRequest());
  }, []);

  const { getCartLoading, getCartError, cartItems } = useAppSelector(
    (state) => state.cart
  );


  return (
    <div>
      <Table className='mt-20'>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[500px]">Product</TableHead>
          <TableHead>Quanitity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.product.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.quantity && item.product?.price ? item.quantity * item.product.price : 0}</TableCell>
            <TableCell className="text-right">Edit</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
  )
}

export default CartPage
