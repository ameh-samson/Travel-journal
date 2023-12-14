import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header--img"
        src="/img/logo.png"
        alt="my travel journal logo"
      />
      <h3 className="header--text">my travel journal.</h3>
    </header>
  );
}
