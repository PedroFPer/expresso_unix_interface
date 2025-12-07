import { useState } from "react";
import SideBar from "./SideBar";
import "../styles/AdminLayoutWrapper.css";

export default function AdminLayoutWrapper({ children, openModal, handleToggleModal }) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

  return (

    <>
      <div
        id="admin-layout-wrapper"
        className={sideBarIsOpen ? "sidebar-open" : "sidebar-closed"}
      >
        <SideBar
          sideBarIsOpen={sideBarIsOpen}
          setSideBarIsOpen={setSideBarIsOpen}
        />
        <main>{children}</main>
      </div>

      {openModal && (
        <div className="overlay-modal" onClick={handleToggleModal}></div>
      )}
    </>


  );
}

