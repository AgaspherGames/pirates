import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import map from "./assets/map.json";
import Island from "./Island";
import { IScanResponse } from "./interfaces";
import { http } from "./http";
import Ship from "./Ship";
import Grid from "./Grid";

function App() {
  const [scan, setScan] = useState<IScanResponse>();

  async function scanArea() {
    const res = (
      await http.get<IScanResponse>("https://datsblack.datsteam.dev/api/scan", {
        headers: {
          "X-API-KEY": "6c2f3940-8e68-4de1-ac50-9dfedcd3fa68",
        },
      })
    ).data;
    setScan(res);
    console.log(res);
  }

  useEffect(() => {
    // console.log(map);
    scanArea();
  });

  return (
    <>
      <div>
        {map.islands.map((island, index) => (
          <Island key={index} island={island} />
        ))}
        {scan?.scan.myShips.map((el) => (
          <Ship ship={el} />
        ))}
        <Grid />
      </div>
    </>
  );
}

export default App;
