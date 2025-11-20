import { createContext, useState, useEffect  } from "react";

export const CustomerContext = createContext();

export function CustomerProvider({ children }) {
    const [travelInfo, setTravelInfo] = useState([]);       
    const [travelerInfo, setTravelerInfo] = useState({});  
    const [ticketInfo, setTicketInfo] = useState({});     


    useEffect(() => {
        const defaultTravelInfo = [
            {
                type: "ida",
                departureTime: "07:00",
                durationTravel: "2:00",
                arrivalTime: "09:00",
                originCity: "Feira de Santana, BA",
                originAddress: "R. Augusto dos Anjos, E - Rua Nova, 40301-110",
                destinyCity: "Salvador, BA",
                destinyAddress: "Praça da Sé, 406 – Pelourinho, 40020-210",
                price: "R$ 80,00",
                availableSeats: 20,
                totalSeats: 40,
                date: new Date(2025, 11, 18),
                company: "Travel Bus"
            },
            {
                type: "volta",
                departureTime: "19:00",
                durationTravel: "2:00",
                arrivalTime: "21:00",
                originCity: "Salvador, BA",
                originAddress: "Praça da Sé, 406 – Pelourinho, 40020-210",
                destinyCity: "Feira de Santana, BA",
                destinyAddress: "R. Augusto dos Anjos, E - Rua Nova, 40301-110",
                price: "R$ 80,00",
                availableSeats: 20,
                totalSeats: 40,
                date: new Date(2025, 11, 18),
                company: "Travel Bus"
            }
        ];

        setTravelInfo(defaultTravelInfo);
    }, []); 

    return (
        <CustomerContext.Provider
            value={{
                travelInfo,
                setTravelInfo,
                travelerInfo,
                setTravelerInfo,
                ticketInfo,
                setTicketInfo
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
}
