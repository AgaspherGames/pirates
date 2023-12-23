import React from "react";
import { IMyShip } from "./interfaces";
interface ShipProps {
  ship: IMyShip;
}

const Ship: React.FC<ShipProps> = ({ ship }) => {
  function getPos() {
    const rotates = {
      north: "-90deg",
      west: "0deg",
      south: "90deg",
      east: "180deg",
    }[ship.direction];
    return rotates;
  }

  return (
    <div
      style={{
        width: ship.size * 10 + "px",
        height: "10px",
        background: "blue",
        position: "absolute",
        top: ship.y * 10,
        left: ship.x * 10,
        scale: 4,
        rotate: getPos(),
      }}
    ></div>
  );
};

export default Ship;
