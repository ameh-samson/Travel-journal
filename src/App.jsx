import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const dataEl = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="container">
      <Header />
      <section>{dataEl}</section>
    </div>
  );
}
