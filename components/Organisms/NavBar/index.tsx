"use client";
import React,{useEffect} from "react";
import LinkText from "@/components/Atoms/Link";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { logoutRequest } from "@/redux/reducers/AuthReducers";
import { ShoppingBasket } from "lucide-react";
import { Badge } from "@/components/Atoms/Badge";
import { getCartRequest } from "@/redux/reducers/CartReducers";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const { isLogin, isAdmin, loginData } = useAppSelector((state) => state.auth);
  const {getCartLoading , getCartError , cartItems} = useAppSelector((state)=>state.cart)

  useEffect(()=>{
      dispatch(getCartRequest())
  },[cartItems])

  function logout() {
    dispatch(logoutRequest());
  }

  return (
    <nav className="bg-slate-900 py-3 flex items-center justify-end  w-full fixed top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-end w-full gap-5 text-sm">
        <p className="text-white text-sm">Welcome to E Shop</p>
        {!isLogin ? (
          <>
            <LinkText className="text-white" url="/auth/login" text="Sign In" />
          </>
        ) : (
          <>
            <a className="text-white cursor-pointer" onClick={logout}>
              {" "}
              Log Out{" "}
            </a>{" "}
          </>
        )}
        {!isLogin && (
          <>
            <LinkText className="text-white" url="/" text="Create an Account" />
          </>
        )}
        {isAdmin && (
          <>
            <LinkText
              className="text-white"
              url="/admin"
              text="Admin Dashboard"
            />
          </>
        )}

        {isLogin && <h2 className="text-white">{loginData.user.name}</h2>}
        {isLogin && (
          <div className="flex flex-row gap-2">
            <ShoppingBasket size={25} color="white" />
            <Badge variant="secondary">{cartItems?.length}</Badge>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
