import { useState, useContext } from "react";
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import ManifestStatusTitle from "../driver-trip-manifest/Components/ManifestStatusTitle";
import PassengerManifest from "./Components/PassengerManifest";
import { DriverContext } from "../../../../infrastructure/context/DriverProvider";

import "./styles/DriverTripManifest.css";

export default function DriverTripManifest() {
  const { passengerList, setPassengerList } = useContext(DriverContext);

  const textHeader = "Lista de Presença"
  


  return (
    <div id="driver-trip-manifest">
      <HeaderBaseMobile textHeader={textHeader}/>
      <ManifestStatusTitle passengerList={passengerList} />

      <div id="scroll-content-trip-manifest">
        <PassengerManifest 
        passengerList={passengerList}
        setPassengerList ={setPassengerList}
        />
      </div>
    </div>
  );
}
