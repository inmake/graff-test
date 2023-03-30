import { makeAutoObservable } from "mobx";

class ShipStore {
  ships: any[] = [];
  types: string[] = [];
  ports: string[] = [];
  searchQuery: string = "";
  selectedType: string = "";
  selectedPorts: string[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setShips(ships: any[]) {
    this.ships = ships;
  }

  setTypes(types: string[]) {
    this.types = types;
  }

  setPorts(ports: string[]) {
    this.ports = ports;
  }

  setSearchQuery(value: string) {
    this.searchQuery = value;
  }

  setSelectedType(value: string) {
    this.selectedType = value;
  }

  toggleSelectedPort(value: string) {
    !this.selectedPorts.includes(value)
      ? this.selectedPorts.push(value)
      : this.selectedPorts.splice(this.selectedPorts.indexOf(value), 1);
  }

  resetFilter() {
    this.searchQuery = "";
    this.selectedType = "";
    this.selectedPorts = [];
  }

  get filteredShips() {
    return this.ships
      .filter((ship) =>
        this.searchQuery.length > 0
          ? ship.ship_name
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
          : ship
      )
      .filter((ship) =>
        this.selectedType.length > 0
          ? ship.ship_type === this.selectedType
          : ship
      )
      .filter((ship) =>
        this.selectedPorts.length > 0
          ? this.selectedPorts.includes(ship.home_port)
          : ship
      );
  }

  async getShips() {
    const ships = await (
      await fetch("https://api.spacexdata.com/v3/ships?limit=20")
    ).json();

    const types: string[] = [];
    const ports: string[] = [];

    for (const ship of ships) {
      types.push(ship.ship_type);
      ports.push(ship.home_port);
    }

    const uniqueTypes = Array.from(new Set(types));
    const uniquePorts = Array.from(new Set(ports));

    this.setShips(ships);
    this.setTypes(uniqueTypes);
    this.setPorts(uniquePorts);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ShipStore();
