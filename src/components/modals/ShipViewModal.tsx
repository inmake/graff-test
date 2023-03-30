import React, { useState } from "react";
import ModalStore from "../../stores/ModalStore";
import ShipStore from "../../stores/ShipStore";

function ShipViewModal({ id }: { id: string }) {
  const [{ ships }] = useState(ShipStore);
  const [{ closeModal }] = useState(ModalStore);
  const ship = ships.find((item) => item.ship_id === id);

  return (
    <div className="space-y-8">
      <button
        className="flex space-x-2 hover:text-purple-500 transition-colors"
        onClick={closeModal}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12L18 12M6 12L12.3636 6M6 12L12.3636 18"
            stroke="#F2F2F2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Вернуться</span>
      </button>
      <h2 className="text-4xl">{ship.ship_name}</h2>
      <div className="w-[644px] space-y-8">
        <div className="grid grid-cols-6 ">
          <div className="col-span-2 space-y-8">
            <div className="flex">
              <span className="text-[#818798] w-[56px]">Тип</span>
              <span>{ship.ship_type}</span>
            </div>
            <div className="flex">
              <span className="text-[#818798] w-[56px]">Вес</span>
              <span>
                {ship.weight_kg ? <>{ship.weight_kg} кг</> : "Неизвестно"}
              </span>
            </div>
          </div>
          <div className="col-span-4 space-y-8">
            <div className="flex">
              <span className="text-[#818798] w-[56px]">Порт</span>
              <span>{ship.home_port}</span>
            </div>
            <div className="flex">
              <span className="text-[#818798] w-[56px]">Год</span>
              <span className="">
                {ship.year_built ? ship.year_built : "Неизвестно"}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <span className="text-[#818798]">Миссии</span>
          <p>
            {ship.missions.length > 0
              ? ship.missions.map((mission: any) =>
                  mission.name !== ship.missions.at(-1).name
                    ? `${mission.name}, `
                    : mission.name
                )
              : "Неизвестно"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShipViewModal;
