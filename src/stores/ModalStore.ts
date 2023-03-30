import { makeAutoObservable } from "mobx";

class ModalStore {
  modal: JSX.Element | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  openModal(component: JSX.Element) {
    this.modal = component;
  }

  closeModal() {
    this.modal = null;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ModalStore();
