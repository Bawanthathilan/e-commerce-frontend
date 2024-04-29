"use client";
import React, { useEffect } from "react";
import LinkText from "@/components/ui/Link";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { logoutRequest } from "@/redux/reducers/AuthReducers";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { getCartRequest } from "@/redux/reducers/CartReducers";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const { isLogin, isAdmin, loginData } = useAppSelector((state) => state.auth);
  const { getCartLoading, getCartError, cartItems } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getCartRequest());
  }, []);

  function logout() {
    dispatch(logoutRequest());
  }

  return (
    <>
      <nav className="bg-slate-900 py-3 flex items-center justify-end  w-full fixed top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-end w-full gap-5 text-sm">
          <LinkText url="/" text="Welcome to E Shop" className="text-white text-sm"/>
          {!isLogin ? (
            <>
              <LinkText
                className="text-white"
                url="/auth/login"
                text="Sign In"
              />
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
              <LinkText
                className="text-white"
                url="/"
                text="Create an Account"
              />
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
            <Link
              href={"/cart"}
              className="relative inline-block cursor-pointer"
            >
              <ShoppingBasket className="h-6 w-6" color="white" />
              <div className="absolute top-0 right-0 -mt-2 -mr-2 rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                {cartItems.length}
              </div>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
