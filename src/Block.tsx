import React from "react";
interface BlockProps {}

const Block: React.FC<BlockProps> = () => {
  return (
    <div
      style={{
        width: "10px",
        height: "10px",
        background: 'red'
      }}
    ></div>
  );
};

export default Block;
