import qrCodeDefault from "../../../../../assets/qr-code-default.png"
import "../styles/PassengerManifest.css"

export default function PassengerManifest({ passengerList, setPassengerList }) {

        const handleTogglePresence = (index) => {
            setPassengerList(prev =>
                prev.map((item, i) => {
                    if (i === index) {
                        return {
                            ...item,
                            isPresent: item.isPresent === "Ausente" ? "Presente" : "Ausente"
                        };
                    }
                    console.log(item[index].name , item[index].isPresent)
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
                />
            </header>

            <ul id="passenger-list" >
                {passengerList.map((passenger, index) => {
                    return (
                        <li className="passenger-item" key={passenger.id}>

                            <input type="checkbox" onClick={() => handleTogglePresence(index)} />
                            <strong>{passenger.name}</strong>
                            <figure><img src={qrCodeDefault} alt="Escanear qrcode" /></figure>

                        </li>

                    ) 
                })}
            </ul>
        </form>

    )
}