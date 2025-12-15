import { useRef, useState } from "react";
import ActionSheet from "actionsheet-react";
import QrModal from "./QrModal";
import qrCodeDefault from "../../../../../assets/qr-code-default.png";
import { formatUtils } from "../../../../../infrastructure/utils/formatUtils";
import "../styles/PassengerManifest.css";

export default function PassengerManifest({passengerManifest, travelId, setTravelInfo}) {
  const sheetRef = useRef(null);
  const [search, setSearch] = useState("");
  const [openQr, setOpenQr] = useState(false);

  const passengersArray = passengerManifest?.passengers || [];

  const sortedList = [...passengersArray].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const filteredList = sortedList.filter(passenger =>
    formatUtils
      .normalizeForSearch(passenger.name)
      .startsWith(formatUtils.normalizeForSearch(search))
  );


  const handleTogglePresence = (passengerId) => {
    if (passengerManifest?.isFinalized) return;

    setTravelInfo(prev =>
      prev.map(trip =>
        trip.id === travelId
          ? {
              ...trip,
              passengerManifest: {
                ...trip.passengerManifest,
                passengers: trip.passengerManifest.passengers.map(p =>
                  p.id === passengerId
                    ? {
                        ...p,
                        isPresent:
                          p.isPresent === "Presente" ? "Ausente" : "Presente"
                      }
                    : p
                )
              }
            }
          : trip
      )
    );
  };


  const handleQrRead = (decodedText) => {
    if (!decodedText) return;

    const passenger = passengerManifest.passengers.find(
      p => p.id.toString() === decodedText.toString()
    );

    if (passenger) {
      handleTogglePresence(passenger.id);
    }

    setOpenQr(false);
  };


  const handleFinalizeManifest = () => {
    setTravelInfo(prev =>
      prev.map(trip =>
        trip.id === travelId
          ? {
              ...trip,
              passengerManifest: {
                ...trip.passengerManifest,
                isFinalized: true
              }
            }
          : trip
      )
    );

    handleClose();
  };

  const handleClose = () => {
    sheetRef.current?.close();
  };

  return (
    <div id="passenger-manifest">
      <form>
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
          {filteredList.map(passenger => (
            <li className="passenger-item" key={passenger.id}>
              <input
                type="checkbox"
                checked={passenger.isPresent === "Presente"}
                disabled={passengerManifest?.isFinalized}
                onChange={() => handleTogglePresence(passenger.id)}
              />

              <strong>{passenger.name}</strong>

              <figure>
                <img
                  src={qrCodeDefault}
                  alt="Escanear qrcode"
                  onClick={() => setOpenQr(true)}
                />
              </figure>

              <QrModal
                open={openQr}
                onClose={() => setOpenQr(false)}
                onRead={handleQrRead}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => sheetRef.current?.open()}
          id="btn-open-finalize-manifest"
          className="btn"
          disabled={passengerManifest?.isFinalized}
        >
          Finalizar Chamada
        </button>
      </form>

      <ActionSheet ref={sheetRef}>
        <aside id="action-sheet-manifest">
          <div id="confirm-finish-manifest-message">
            <p>Ainda há passageiros que não confirmaram presença.</p>
            <p>Deseja finalizar a chamada mesmo assim?</p>
          </div>

          <div id="confirm-finish-manifest-group-btn">
            <button
              type="button"
              id="btn_finish_manifest"
              className="btn"
              onClick={handleFinalizeManifest}
              onTouchStart={handleFinalizeManifest}
            >
              Finalizar
            </button>

            <button
              type="button"
              id="btn-cancel-finish-manifest"
              className="btn"
              onClick={handleClose}
              onTouchStart={handleClose}
            >
              Cancelar
            </button>
          </div>
        </aside>
      </ActionSheet>
    </div>
  );
}
