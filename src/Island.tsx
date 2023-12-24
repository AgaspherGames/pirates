import React from "react";
import { IIsland } from "./interfaces";
interface IslandProps {
  island: IIsland;
}

const Island: React.FC<IslandProps> = ({ island }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: island.start[0],
        left: island.start[1],
        width: island.map[0].length,
        height: island.map.length,
        background: 'green'
      }}
    >
    </div>
  );
};

export default Island;
