import React, { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Badge } from "@/components/ui/Badge";
import { ShoppingBasket, Terminal } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { addToCartRequest } from "@/redux/reducers/CartReducers";
import { Card } from "@/components/ui/Card";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";

interface ProductCardI {
  product: any;
  Loading: boolean;
}

const schema = z.object({
  productId: z.number(),
  quantity: z.number().min(1),
});

type FormFields = z.infer<typeof schema>;

 function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

const ProductCard = ({ product , Loading }: ProductCardI) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      productId: product.id,
      quantity: 1,
    },
    resolver: zodResolver(schema),
  });
  const dispatch = useAppDispatch();
  const tagList = product.tags?.split(",");

  const { addToCartLoading, cartItems } = useAppSelector((state) => state.cart);

  const addToCart: SubmitHandler<FormFields> = async (data: any) => {
    const cartAlready = cartItems.find((item) => item.productId === data.productId)
    if(cartAlready) {
      setIsOpen(false);
      toast.error("Cart item already exists")
    }else{
      dispatch(addToCartRequest(data));
    if (addToCartLoading) {
      setIsOpen(true);
      toast.success('Add to cart successfully')
    } else {
      setIsOpen(false);
    }
    }
  };

  return (
    <React.Fragment>
      {Loading ? (<><SkeletonCard/></>):(<Card className="w-full max-w-xs hover:shadow-lg cursor-pointer">
        <div className="flex aspect-square items-center overflow-hidden rounded-lg">
          <Image
            alt="Product"
            className="object-cover"
            height={300}
            src={product.image}
            style={{
              aspectRatio: "250/250",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
        <div className="grid gap-1 p-4">
          <h3 className="text-sm font-semibold tracking-wide">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="text-sm font-semibold">${product.price}</p>
          <div className="flex flex-row gap-2">
            {tagList?.map((tag: any, i: number) => (
              <Badge key={i}>{tag}</Badge>
            ))}
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger>
                <ShoppingBasket color="black" size={25} />
              </DialogTrigger>
              <DialogContent>
                <form onSubmit={handleSubmit(addToCart)}>
                  <DialogHeader>
                    <DialogTitle>Add To Cart - {product.name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Quantity
                      </Label>
                      <Input
                        {...register("quantity", { valueAsNumber: true })}
                        type="number"
                        className="col-span-3"
                      />
                      {errors.quantity && (
                        <span>{errors.quantity?.message}</span>
                      )}
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Add to Cart</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>)}
      
    </React.Fragment>
  );
};

export default ProductCard;
