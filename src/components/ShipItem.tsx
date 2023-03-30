import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import ModalStore from "../stores/ModalStore";
import ShipViewModal from "./modals/ShipViewModal";

interface ShipItemProps {
  id: string;
  name: string;
  type: string;
  port: string;
}

function ShipItem({ id, name, type, port }: ShipItemProps) {
  const [{ openModal }] = useState(ModalStore);

  return (
    <div
      className="group flex items-center justify-between bg-[#22242A] hover:bg-[#393C46] transition-colors p-8 rounded-lg cursor-pointer"
      onClick={() => openModal(<ShipViewModal id={id} />)}
    >
      <div className="space-y-4 w-full">
        <p className="text-xl">{name}</p>
        <div className="grid grid-cols-8 auto-cols-max text-sm">
          <div className="col-span-2 space-x-4">
            <span className="text-[#818798]">Тип</span>
            <span>{type}</span>
          </div>
          <div className="col-span-6 space-x-4">
            <span className="text-[#818798]">Порт</span>
            <span>{port}</span>
          </div>
        </div>
      </div>
      <div className="group-hover:opacity-100 opacity-0 transition-opacity ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 12L6 12M18 12L11.6364 18M18 12L11.6364 6"
            stroke="#F2F2F2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default observer(ShipItem);
