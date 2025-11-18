import { Link } from 'react-router-dom'
import "../styles/PassengerInfoCard.css"

export default function PassengerInfoCard() {
    return (
        <section id='passenger-info-card'>
            <h3>Dados de quem vai viajar</h3>
            <div>
                <p>Usar os mesmos dados de
                    quem está comprando</p>
                <i className="bi bi-toggle-off"></i>
            </div>
            <div>
                <p>Viajante 1</p>
                <Link to={"/customer/passenger-registration"}  className="btn btn-primary btn-custom  " >adicionar</Link>
            </div>
        </section>
    )
}