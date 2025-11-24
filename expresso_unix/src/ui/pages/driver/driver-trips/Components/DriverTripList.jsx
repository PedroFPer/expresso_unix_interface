import lineTravelCard from "../../../../../assets/line-travel-card.png"
import "../styles/DriverTripList.css"

export default function DriverTripList() {
    return (
        <section id="driver-trip-list">
            <h3>Viagens Ativas</h3>

            <article class="trip-item">
                <div className="trip-itinerary">
                    <div className="trip-time">
                        <time datetime="07:00">07:00</time>
                        <time datetime="09:00">09:00</time>
                    </div>
                    <figure><img src={lineTravelCard} alt="Linha de destino" /></figure>
                    <div>
                        <div class="origin">
                            <h3>Feira de Santana, BA</h3>
                            <p>R. Augusto dos Anjos...</p>
                        </div>
                        <div class="destination">
                            <h3>Salvador, BA</h3>
                            <p>Praça da Sê...</p>
                        </div>
                    </div>
                </div>


                <aside class="trip-date">
                    <time datetime="2025-10-01">01 Outubro</time>
                </aside>

            </article>

        </section>
    )
}