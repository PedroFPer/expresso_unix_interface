import { useState } from "react";
import qrCodeDefault from "../../../../../assets/qr-code-default.png"
import { formatUtils } from "../../../../../infrastructure/utils/formatUtils";
import "../styles/PassengerManifest.css"

export default function PassengerManifest({ passengerList, setPassengerList }) {

    const [search, setSearch] = useState("");

    const sortedList = [...passengerList].sort((a, b) => a.name.localeCompare(b.name));

    const filteredList = sortedList.filter(passenger =>
        passenger.name.toLowerCase().startsWith(formatUtils.normalizeForSearch(search))
    );

    const handleTogglePresence = (id) => {
        setPassengerList(prev =>
            prev.map(item => {
                if (item.id === id) {

                    return {
                        ...item,
                        isPresent: item.isPresent === "Ausente" ? "Presente" : "Ausente"
                    };

                }

                return item;
            })
        );

    };

    return (
        <form id="passenger-manifest" >
            <header>
                <input
                    id="form-input-manifest"
                    type="text"
                    placeholder="Digite o nome..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </header>

            <ul id="passenger-list" >
                {filteredList.map((passenger) => {
                    return (
                        <li className="passenger-item" key={passenger.id}>

                            <input type="checkbox" onClick={() => handleTogglePresence(passenger.id)} />
                            <strong>{passenger.name}</strong>
                            <figure><img src={qrCodeDefault} alt="Escanear qrcode" /></figure>

                        </li>

                    )
                })}
            </ul>
        </form>

    )
}