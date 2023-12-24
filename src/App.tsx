import { useEffect, useRef, useState } from "react";
import "./App.css";

import map from "./assets/map.json";
import Island from "./Island";
import { IScanResponse } from "./interfaces";
import { http } from "./http";
import Ship from "./Ship";
import Grid from "./Grid";
import MousePos from "./MousePos";

function App() {
  const [scan, setScan] = useState<IScanResponse>();

  const timeout = useRef<number>();

  async function scanArea() {
    const res = (
      await http.get<IScanResponse>("https://datsblack.datsteam.dev/api/scan", {
        headers: {
          "X-API-KEY": "6c2f3940-8e68-4de1-ac50-9dfedcd3fa68",
        },
      })
    ).data;
    setScan(res);
  }

  useEffect(() => {
    timeout.current = setInterval(() => {
      scanArea();
    }, 3000);
    scanArea();
    return () => {
      clearInterval(timeout.current)
     }
  }, []);

  return (
    <>
      <div>
        <MousePos />
        {map.islands.map((island, index) => (
          <Island key={index} island={island} />
        ))}
        {scan?.scan.myShips.map((el) => (
          <Ship enemy={false} ship={el} />
        ))}
        {scan?.scan.enemyShips.map((el) => (
          <Ship enemy={true} ship={el} />
        ))}
        {/* <Ship
          enemy={false}
          ship={{
            x: 500,
            y: 500,
            direction: "east",
            size: 4,
            id: 123
          }}
        /> */}
        <Grid />
      </div>
    </>
  );
}

export default App;
