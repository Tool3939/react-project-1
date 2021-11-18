import React, { useState } from "react";

const Stock = (stock, index) => {
  //need to get key
  const { ticker, label, uid, value, category } = stock;
  const [color, setColor] = useState("");
  const stockStyle = {
    background: color,
  };
  console.log(index);
  return (
    <div
      style={stockStyle}
      className="stock"
      onMouseEnter={() => setColor("lightgreen")}
      onMouseLeave={() => setColor("")}
      onClick={() => alert(uid)}
    >
      <div>Label: {label}</div>
      <div>Value: {value}</div>
      <div>Category: {category}</div>
      <div
        className="uid"
        onClick={(e) => {
          alert(`this is the ${/*key*/ 2} stock`); // suppose to be key
          e.stopPropagation();
        }}
      >
        Uid: {uid}
      </div>
    </div>
  );
};

export default Stock;
