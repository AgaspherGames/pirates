import React, { useEffect, useState } from "react";
interface MousePosProps {}

const MousePos: React.FC<MousePosProps> = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handle(e: MouseEvent) {
      setPos({
        x: e.pageX,
        y: e.pageY,
      });
    }

    window.addEventListener("mousemove", handle);

    return () => {
      window.removeEventListener("mousemove", handle);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: pos.y-20 + "px",
        left: pos.x + "px",
      }}
    >
      {pos.x} {pos.y}
    </div>
  );
};

export default MousePos;
