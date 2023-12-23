import React from "react";
import { IIsland } from "./interfaces";
import Block from "./Block";
interface IslandProps {
  island: IIsland;
}

const Island: React.FC<IslandProps> = ({ island }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: island.start[0]*10,
        left: island.start[1]*10,
      }}
    >
      {island.map.map((el, ind) => (
        <div style={{display:"flex"}}>
          {el.map((item) => (
            <Block />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Island;
