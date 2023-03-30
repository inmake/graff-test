import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import ModalStore from "../stores/ModalStore";

function Modal() {
  const [{ modal, closeModal }] = useState(ModalStore);

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.code === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  return (
    <>
      {modal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[#151619] text-white overflow-y-auto"
          // onClick={() => closeModal()}
        >
          <div className="p-16 w-full min-h-full relative">
            <div
              // className="p-8 w-[500px] bg-white rounded-lg cursor-default shadow-xl"
              // onClick={(e) => e.stopPropagation()}
            >
              {modal}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default observer(Modal);
