import { observer } from "mobx-react-lite";
import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import ShipStore from "../stores/ShipStore";

function Sidebar() {
  const [
    {
      ports,
      types,
      searchQuery,
      selectedPorts,
      selectedType,
      setSearchQuery,
      toggleSelectedPort,
      setSelectedType,
      resetFilter,
    },
  ] = useState(ShipStore);
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);
  const selectPortRef = useRef<HTMLDivElement>(null);

  useClickOutside(selectPortRef, () => setSelectIsOpen(false));

  return (
    <div className="min-w-[392px] bg-[#22242A] text-white px-8 py-16 font-roboto space-y-8 min-h-screen">
      <div className="flex justify-between">
        <p className="text-2xl">Фильтры</p>
        <button
          className="text-[#C5C7CE hover:text-purple-500 transition-colors"
          onClick={resetFilter}
        >
          Сбросить
        </button>
      </div>
      <label htmlFor="name" className="space-y-1 inline-block w-full">
        <span className="text-[#C5C7CE">Название</span>
        <input
          type="text"
          id="name"
          className="w-full p-2 rounded bg-[#393C46] outline-none border border-transparent focus:border-purple-500 transition-colors"
          autoComplete="off"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>

      <div ref={selectPortRef} className="relative">
        <label htmlFor="port" className="space-y-1 inline-block w-full">
          <span className="text-[#C5C7CE">Порт</span>
          <input
            readOnly
            type="text"
            value={
              selectedPorts.length > 0
                ? `Выбрано ${selectedPorts.length}`
                : "Не выбрано"
            }
            onClick={() => setSelectIsOpen(!selectIsOpen)}
            className="w-full px-3 py-2 rounded bg-[#393C46] outline-none border border-transparent focus:border-purple-500 transition-colors cursor-default"
          />
        </label>
        <div className="absolute w-full bg-[#393C46] -space-y-2">
          {selectIsOpen &&
            ports.map((port, index) => (
              <label
                key={index}
                htmlFor={`port-${index}`}
                className="flex items-center w-full px-4 py-4 space-x-4"
              >
                <input
                  id={`port-${index}`}
                  name="port"
                  type="checkbox"
                  value={"Не выбрано"}
                  checked={selectedPorts.includes(port)}
                  onChange={() => toggleSelectedPort(port)}
                  className=" px-3 py-2 rounded bg-[#393C46] outline-none border border-transparent focus:border-purple-500 transition-colors cursor-default"
                />
                <span>{port}</span>
              </label>
            ))}
        </div>
      </div>

      <div className="div space-y-4">
        <p className="text-[#C5C7CE">Тип</p>
        <div className="space-y-4">
          {types.map((type, index) => (
            <label
              key={index}
              htmlFor={`radio-${index}`}
              className="block space-x-4"
            >
              <input
                id={`radio-${index}`}
                type="radio"
                name="type"
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default observer(Sidebar);
