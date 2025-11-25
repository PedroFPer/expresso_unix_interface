import { useLocation } from "react-router-dom";
import HeaderBaseMobile from "../../../common-components/components/HeaderHomeMobile"
import "./styles/DriverTripChat.css"

export default function DriverTripChat() {
    const location = useLocation();
    const { travel } = location.state || {};

    const textHeader = "Mensagens";

    return (
        <div>
            <HeaderBaseMobile textHeader={textHeader}/>
            
        </div>
    )
}