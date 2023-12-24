import React, { useState } from "react";
import { IMyShip } from "./interfaces";
import Modal from "./Modal";
interface ShipProps {
  ship: IMyShip;
  enemy: boolean;
}

const Ship: React.FC<ShipProps> = ({ ship, enemy }) => {
  function getPos() {
    const rotates = {
      north: "-90deg",
      west: "180deg",
      south: "90deg",
      east: "0deg",
    }[ship.direction];
    return rotates;
  }

  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        width: ship.size + "px",
        height: "1px",
        background: enemy
          ? "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,15,15,1) 50%, rgba(255,255,255,1) 100%)"
          : "linear-gradient(90deg, rgba(0,249,255,1) 0%, rgba(15,237,255,1) 50%, rgba(255,255,255,1) 100%)",
        position: "absolute",
        top: ship.y,
        left: ship.x,
        scale: 4,
        rotate: getPos(),
      }}
      className="ship"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
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
        <Modal
          isOpen={hover}
          close={() => {}}
          style={{ top: 0, left: 0, background: "rgba(0,0,0,0.5)" }}
        >
          <p>id:{ship.id}</p>
          <p>{ship.hp}hp</p>
          <p>
            {ship.x} : {ship.y}
          </p>
          <p>speed: {ship.speed}</p>
        </Modal>
        {/* id:{ship.id} {ship.hp}hp {ship.x} : {ship.y} */}
      </div>
    </div>
  );
};

export default Ship;
