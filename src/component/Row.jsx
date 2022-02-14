import React from "react";
import "../styles/Row.css";
import {Pixel} from "./Pixel";

export const Row = (props) => {
  const { width, selectedColor } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return <div className="row">{pixels}</div>;
}
