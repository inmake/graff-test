import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Modal from "./components/Modal";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <Outlet />
        </div>
        <SideMenu />
      </div>
      <Modal />
    </>
  );
}

export default App;
