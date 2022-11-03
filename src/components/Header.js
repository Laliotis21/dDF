import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <Link to="/">My blog</Link>
    </header>
  );
}
