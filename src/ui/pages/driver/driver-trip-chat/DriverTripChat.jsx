import { useLocation } from "react-router-dom";
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import DriverChatWindow from "./Components/DriverChatWindow";
import "./styles/DriverTripChat.css"

export default function DriverTripChat() {
    const location = useLocation();
    const { travel } = location.state || {};

    const textHeader = "Mensagens";

    return (
        <div id="driver-trip-chat">
            <HeaderBaseMobile textHeader={textHeader} />
            <DriverChatWindow />
        </div>
    )
}