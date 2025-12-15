import { createContext, useState, useEffect } from "react";

export const TravelContext = createContext();

export function TravelProvider({ children }) {
    const [travelInfo, setTravelInfo] = useState([]);

    const createPassengerManifest = () => ({
        id: 1,
        isFinalized: false,
        passengers: [
            { id: 1, name: "Pedro Ferreira", isPresent: false },
            { id: 2, name: "Lucas Andrade", isPresent: false },
            { id: 3, name: "Mariana Souza", isPresent: false },
            { id: 4, name: "Bruna Carvalho", isPresent: false },
            { id: 5, name: "Gustavo Oliveira", isPresent: false },
            { id: 6, name: "Fernanda Lima", isPresent: false },
            { id: 7, name: "Rafael Martins", isPresent: false },
            { id: 8, name: "Camila Duarte", isPresent: false },
            { id: 9, name: "João Henrique", isPresent: false },
            { id: 10, name: "Ana Vitória", isPresent: false },
            { id: 11, name: "Ana Alicia", isPresent: false }
        ]
    });

    useEffect(() => {
        const defaultTravelInfo = [
            {
                id: 1,
                type: "ida",
                departureTime: "07:00",
                durationTravel: "2:00",
                arrivalTime: "09:00",
                originCity: "Feira de Santana, BA",
                originAddress: "R. Augusto dos Anjos, E - Rua Nova, 40301-110",
                destinyCity: "Salvador, BA",
                destinyAddress: "Praça da Sé, 406 – Pelourinho, 40020-210",
                price: 80.00,
                availableSeats: 20,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 23),
                dateArrival: new Date(2025, 11, 23),
                company: "Travel Bus",
                driver: "Daniel Frascisco",
                passengerManifest: createPassengerManifest()
            },
            {
                id: 2,
                type: "volta",
                departureTime: "19:00",
                durationTravel: "2:00",
                arrivalTime: "21:00",
                originCity: "Salvador, BA",
                originAddress: "Praça da Sé, 406 – Pelourinho, 40020-210",
                destinyCity: "Feira de Santana, BA",
                destinyAddress: "R. Augusto dos Anjos, E - Rua Nova, 40301-110",
                price: 80.00,
                availableSeats: 20,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 23),
                dateArrival: new Date(2025, 11, 23),
                company: "Travel Bus",
                driver: "Lucas Moreira",
                passengerManifest: createPassengerManifest()
            },
            {
                id: 3,
                type: "volta",
                departureTime: "19:00",
                durationTravel: "2:00",
                arrivalTime: "21:00",
                originCity: "Salvador, BA",
                originAddress: "Praça da Sé, 406 – Pelourinho, 40020-210",
                destinyCity: "Feira de Santana, BA",
                destinyAddress: "R. Augusto dos Anjos, E - Rua Nova, 40301-110",
                price: 80.00,
                availableSeats: 20,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 23),
                dateArrival: new Date(2025, 11, 23),
                company: "Travel Bus",
                driver: "Mariana Alves",
                passengerManifest: createPassengerManifest()
            },
            {
                id: 4,
                type: "volta",
                departureTime: "19:00",
                durationTravel: "2:00",
                arrivalTime: "21:00",
                originCity: "Salvador, BA",
                originAddress: "Praça da Sé, 406 – Pelourinho, 40020-210",
                destinyCity: "Feira de Santana, BA",
                destinyAddress: "R. Augusto dos Anjos, E - Rua Nova, 40301-110",
                price: 80.00,
                availableSeats: 20,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 23),
                dateArrival: new Date(2025, 11, 23),
                company: "Travel Bus",
                driver: "Thiago Pereira",
                passengerManifest: createPassengerManifest()
            }
        ];

        setTravelInfo(defaultTravelInfo);
    }, []);

    return (
        <TravelContext.Provider value={{ travelInfo, setTravelInfo }}>
            {children}
        </TravelContext.Provider>
    );
}
