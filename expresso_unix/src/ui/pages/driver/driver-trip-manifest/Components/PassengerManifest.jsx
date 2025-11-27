import React, { useRef, useState } from "react";
import ActionSheet from "actionsheet-react";
import qrCodeDefault from "../../../../../assets/qr-code-default.png";
import { formatUtils } from "../../../../../infrastructure/utils/formatUtils";
import "../styles/PassengerManifest.css";

export default function PassengerManifest({ passengerList, setPassengerList }) {

    const sheetRef = useRef(null);

    const [search, setSearch] = useState("");

    const sortedList = [...passengerList].sort((a, b) => a.name.localeCompare(b.name));

    const filteredList = sortedList.filter(passenger =>
        formatUtils.normalizeForSearch(passenger.name)
            .startsWith(formatUtils.normalizeForSearch(search))
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

    const handleClose = (e) => {
        sheetRef.current?.close();
    };

    return (
        <form id="passenger-manifest">
            <header>
                <input
                    id="form-input-manifest"
                    type="text"
                    placeholder="Digite o nome..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </header>

            <ul id="passenger-list">
                {filteredList.map((passenger) => (
                    <li className="passenger-item" key={passenger.id}>
                        <input type="checkbox" onClick={() => handleTogglePresence(passenger.id)} />
                        <strong>{passenger.name}</strong>
                        <figure><img src={qrCodeDefault} alt="Escanear qrcode" /></figure>
                    </li>
                ))}
            </ul>

            <button type="button" onClick={() => sheetRef.current?.open()} className="btn btn-primary btn-custom">Finalizar Chamada</button>


            <ActionSheet
                ref={sheetRef}
                sheetStyle={{
                    backgroundColor: '#F9F9F9',   
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    padding: '1em',

                    display: 'grid',        
                    justifyItems: 'center',      
                           
                }}
                maskStyle={{
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                <aside id="action-sheet-manifest">

                    <div id="confirm-finish-manifest-message">
                        <p>Ainda há passageiros que não confirmaram presença.</p>
                        <p>Deseja finalizar a chamada mesmo assim?</p>
                    </div>

                    <div id="confirm-finish-manifest-group-btn">
                        <button id="btn_finish_manifest" className="btn" >Finalizar</button>
                        <button id="btn-cancel-finish-manifest" className="btn" onClick={handleClose}>Cancelar</button>
                    </div>

                </aside>
            </ActionSheet>
        </form>
    );
}
