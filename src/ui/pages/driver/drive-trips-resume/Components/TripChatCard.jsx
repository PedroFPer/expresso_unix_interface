import { Link } from "react-router-dom";
import iconArrow from "../../../../../assets/icon-arrow.png"
import "../styles/TripChatCard.css"

export default function TripChatCard({travel}) {
    return (
        <section id="trip-chat-card" >
            <strong>Mensagens</strong>

            <figure>
                <Link
                    to={"trip-chat"}
                    state={{ travel }}>
                    <img src={iconArrow} alt="Chat da viagem" />
                </Link>
            </figure>
        </section>
    )
}