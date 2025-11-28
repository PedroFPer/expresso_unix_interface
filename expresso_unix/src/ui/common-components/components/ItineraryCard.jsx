import lineTravelSmall from "../../../assets/line-travel-card-small.png"
import { formatUtils } from "../../../infrastructure/utils/formatUtils";
import "../styles/ItineraryCard.css"

export default function ItineraryCard({ travelInfo }) {
    const segments = Array.isArray(travelInfo) ? travelInfo : [travelInfo];

    return (
        <section id="itinerary-card">
            {segments.map((segment, index) => {
                const formattedDate = formatUtils.toShortDate(segment.date);

                return (
                    <div className="itinerary-segment" key={index}>
                        <h3>
                            {segment.type === "ida" ? "Ida" : "Volta"} - {formattedDate}
                        </h3>

                        <time className="segment-time segment-time-departure">
                            {segment.departureTime}
                        </time>

                        <time className="segment-time segment-time-duration">
                            {segment.durationTravel}
                        </time>

                        <time className="segment-time segment-time-arrival">
                            {segment.arrivalTime}
                        </time>

                        <div className="segment-route-line">
                            <figure>
                                <img src={lineTravelSmall} alt="Linha Ilustrando o Trajeto" />
                            </figure>
                        </div>

                        <div className="segment-locations segment-locations-origin">
                            <strong>{segment.originCity}</strong>
                            <p>{segment.originAddress}</p>
                        </div>

                        <div className="segment-locations segment-locations-destination">
                            <strong>{segment.destinyCity}</strong>
                            <p>{segment.destinyAddress}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
