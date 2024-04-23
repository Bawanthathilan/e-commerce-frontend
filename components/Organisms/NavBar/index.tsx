"use client"
import React, { useState } from "react";
import LinkText from "@/components/Atoms/Link";


const NavBar = () => {
  const [showModal, setshowModal] = useState<boolean>(false);
  return (
    <nav className="bg-slate-900 py-3 flex items-center justify-end  w-full absolute top-0">
      

      <div className="max-w-6xl mx-auto flex justify-end w-full gap-5 text-sm">
        <p className="text-white text-sm">Welcome to GitHub Shop</p>
        <LinkText
          className="text-white"
          url="/auth/login"
          text="Sign In"
        />
        <LinkText className="text-white" url="/" text="Create an Account" />
        <LinkText className="text-white" url="/admin" text="Admin Dashboard" />
      </div>
    </nav>
  );
};

export default NavBar;
