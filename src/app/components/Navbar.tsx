"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons for Menu and Close

import Menu from "./Menu";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
      <div>
        <Menu />
      </div>
    );
  }
  