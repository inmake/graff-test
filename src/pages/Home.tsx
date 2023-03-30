import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import ShipItem from "../components/ShipItem";
import ShipStore from "../stores/ShipStore";

function Home() {
  const [{ ships, filteredShips, getShips }] = useState(ShipStore);

  useEffect(() => {
    getShips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-16 space-y-8 min-h-screen bg-[#151619] text-white">
      <h1 className="text-4xl">SpaceX Ships</h1>
      <div className="space-y-4">
        {ships.length > 0
          ? filteredShips.map((ship, index) => (
              <ShipItem
                key={index}
                id={ship.ship_id}
                name={ship.ship_name}
                type={ship.ship_type}
                port={ship.home_port}
              />
            ))
          : "Загрузка..."}
      </div>
    </div>
  );
}

export default observer(Home);
