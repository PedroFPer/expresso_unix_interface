import { useState, useContext } from "react";
import HeaderHomeMobile from "../../../common-components/components/HeaderHomeMobile"
import EmptyTripState from "./Components/EmptyTripState";
import DriverTripList from "./Components/DriverTripList";
import { DriverContext } from "../../../../infrastructure/context/DriverProvider";
import "./styles/DriverTrips.css"

export default function DriverTrips(){
    const { travelInfo, setTravelInfo } = useContext(DriverContext);

    const withoutTrip = travelInfo.length === 0;


    return(
        <div id="driver-trips">
            <HeaderHomeMobile />
            <div id="scroll-content-driver-trips">
                {withoutTrip? <EmptyTripState /> : <DriverTripList />}
            </div>
        </div>
    )
}