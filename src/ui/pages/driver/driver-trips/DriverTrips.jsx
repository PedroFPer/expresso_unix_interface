import { useState, useContext } from "react";
import HeaderHomeMobile from "../../../common-components/components/HeaderHomeMobile"
import EmptyTripState from "./Components/EmptyTripState";
import DriverTripList from "./Components/DriverTripList";
import { TravelContext } from "../../../../infrastructure/context/TravelProvider";
import "./styles/DriverTrips.css"

export default function DriverTrips(){
    const { travelInfo } = useContext(TravelContext);
    const tripTeste = []

    const withoutTrip = travelInfo.length === 0;


    return(
        <div id="driver-trips">
            <HeaderHomeMobile />
            <div id="scroll-content-driver-trips">
                {withoutTrip? <EmptyTripState /> : <DriverTripList travelInfo={travelInfo} />}
            </div>
        </div>
    )
}