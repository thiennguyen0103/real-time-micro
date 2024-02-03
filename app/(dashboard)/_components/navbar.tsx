"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-4 bg-green-500 p-5">
      <div className="hidden bg-yellow-500 lg:flex lg:flex-1">Search</div>
      <UserButton />
    </nav>
  );
};

export default Navbar;
