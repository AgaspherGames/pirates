import React from "react";
interface BlockProps {}

const Block: React.FC<BlockProps> = () => {
  return (
    <div
      style={{
        width: "1px",
        height: "1px",
        background: 'red'
      }}
    ></div>
  );
};

export default Block;
