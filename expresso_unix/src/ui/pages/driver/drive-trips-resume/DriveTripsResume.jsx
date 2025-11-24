import { useParams } from "react-router-dom"
import { useState, useContext } from "react";
import {DriverContext} from "../../../../infrastructure/context/DriverProvider"

export default function DriveTripsResume() {
    const { id } = useParams();
    console.log(id)
    const { travelInfo, setTravelInfo } = useContext(DriverContext);

    const travel =travelInfo[id];

    return (
        <pre>
            {JSON.stringify(travel, null, 2)}
        </pre>
    )
}