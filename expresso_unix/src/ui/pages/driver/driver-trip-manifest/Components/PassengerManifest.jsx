import qrCodeDefault from "../../../../../assets/qr-code-default.png"
import "../styles/PassengerManifest.css"

export default function PassengerManifest() {
    return (
        <form id="passenger-manifest" >
            <header>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Digite o nome..."
                />
            </header>

            <ul id="passenger-list" >
                <li className="passenger-item">

                    <input type="checkbox" />
                    <strong>Pedro Ferreira</strong>
                    <figure><img src={qrCodeDefault} alt="Escanear qrcode" /></figure>

                </li>
            </ul>
        </form>
    )
}