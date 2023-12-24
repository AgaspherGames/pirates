import React from "react";
import { IMyShip } from "./interfaces";
interface ShipProps {
  ship: IMyShip;
  enemy: boolean;
}

const Ship: React.FC<ShipProps> = ({ ship, enemy }) => {
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
        width: ship.size + "px",
        height: "1px",
        background: enemy ? "red" : "blue",
        position: "absolute",
        top: ship.y,
        left: ship.x,
        scale: 4,
        rotate: getPos(),
      }}
      className="ship"
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          top: "-20px",
          left: "-20px",
          position: "absolute",
          borderRadius: "1000px",
          border: "rgba(255,255,255,0.5) 1px solid",
        }}
      ></div>
      <div
        style={{
          rotate: "-" + getPos(),
          display: "flex",
          width: "max-content",
        }}
        className="coords"
      >
        {ship.hp}hp {ship.x} : {ship.y}
      </div>
    </div>
  );
};

export default Ship;
