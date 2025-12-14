import { Link } from "react-router-dom";
import lineTravelCard from "../../../../../assets/line-travel-card.png";
import { formatUtils } from "../../../../../infrastructure/utils/formatUtils";
import "../styles/DriverTripList.css";

export default function DriverTripList({ travelInfo }) {

    const today = new Date().setHours(0, 0, 0, 0);

    const dailyTrips = travelInfo.filter(t =>
        new Date(t.dateDeparture).setHours(0, 0, 0, 0) === today
    );

    const activeTrips = travelInfo.filter(t => {
        const tripDate = new Date(t.dateDeparture).setHours(0, 0, 0, 0);
        return tripDate > today;
    });

    return (
        <section id="driver-trip-list">

            {dailyTrips.length > 0 && (
                <div id="active-today-trips">
                    <h3>Viagens do Dia</h3>

                    {dailyTrips.map((travel, index) => {
                        const formattedDateTrip = formatUtils.getDayAndMonth(travel.dateDeparture);

                        return (
                            <Link
                                to={`trips-resume/${index}`}
                                className="trip-item"
                                key={"todayTrips-" + index}
                            >
                                <TripCard travel={travel} formattedDateTrip={formattedDateTrip} />
                            </Link>
                        );
                    })}
                </div>
            )}

            {activeTrips.length > 0 && (
                <div id="active-future-trips">
                    <h3>Viagens Ativas</h3>

                    {activeTrips.map((travel, index) => {
                        const formattedDateTrip = formatUtils.getDayAndMonth(travel.dateDeparture);

                        return (
                            <Link
                                to={`trips-resume/${index}`}
                                className="trip-item"
                                key={"futureTrips-" + index}
                            >
                                <TripCard travel={travel} formattedDateTrip={formattedDateTrip} />
                            </Link>
                        );
                    })}
                </div>
            )}

        </section>
    );
}

function TripCard({ travel, formattedDateTrip }) {
    return (
        <>
            <div className="trip-item-segment">
                <time className="trip-item-time trip-item-time-departure">
                    {travel.departureTime}
                </time>

                <time className="trip-item-time trip-item-time-duration">
                    {travel.durationTravel}
                </time>

                <time className="trip-item-time trip-item-time-arrival">
                    {travel.arrivalTime}
                </time>

                <div className="trip-item-route-line">
                    <figure>
                        <img src={lineTravelCard} alt="Linha Ilustrando o Trajeto" />
                    </figure>
                </div>

                <div className="trip-item-locations trip-item-locations-origin">
                    <strong>{travel.originCity}</strong>
                    <p>{travel.originAddress}</p>
                </div>

                <div className="trip-item-locations trip-item-locations-destination">
                    <strong>{travel.destinyCity}</strong>
                    <p>{travel.destinyAddress}</p>
                </div>
            </div>

            <div className="trip-item-date">
                <strong>{formattedDateTrip.day}</strong>
                <p>{formattedDateTrip.month}</p>
            </div>
        </>
    );
}
