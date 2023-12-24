import React, { useEffect, useState } from "react";
import { http } from "./http";
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
    function RClickHandle(e: MouseEvent) {
      e.preventDefault();
      http.post("https://datsblack.datsteam.dev/api/longScan", {
        x: e.pageX,
        y: e.pageY,
      });
    }
    function AttackHandle(e: MouseEvent) {
      console.log(e);
      e.preventDefault();
      const shipId = prompt("shipId");
      http.post("https://datsblack.datsteam.dev/api/shipCommand", {
        ships: [
          {
            id: shipId,
            cannonShoot: {
              x: e.pageX,
              y: e.pageY,
            },
          },
        ],
      });
    }

    window.addEventListener("mousemove", handle);
    window.addEventListener("contextmenu", RClickHandle);
    window.addEventListener("click", AttackHandle);

    return () => {
      window.removeEventListener("mousemove", handle);
      window.removeEventListener("contextmenu", RClickHandle);
      window.removeEventListener("click", AttackHandle);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: pos.y - 20 + "px",
        left: pos.x + "px",
      }}
    >
      {pos.x} {pos.y}
    </div>
  );
};

export default MousePos;
