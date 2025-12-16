import { createContext, useState, useEffect } from "react";

export const TravelContext = createContext();

export function TravelProvider({ children }) {
    const [travelInfo, setTravelInfo] = useState([]);

    const createPassengerManifest = () => ({
        id: 0,
        isFinalized: false,
        passengers: [
            { id: 0, name: "Pedro Ferreira", isPresent: false },
            { id: 1, name: "Lucas Andrade", isPresent: false },
            { id: 2, name: "Mariana Souza", isPresent: false },
            { id: 3, name: "Bruna Carvalho", isPresent: false },
            { id: 4, name: "Gustavo Oliveira", isPresent: false },
            { id: 5, name: "Fernanda Lima", isPresent: false },
            { id: 6, name: "Rafael Martins", isPresent: false },
            { id: 7, name: "Camila Duarte", isPresent: false },
            { id: 8, name: "João Henrique", isPresent: false },
            { id: 9, name: "Ana Vitória", isPresent: false },
            { id: 10, name: "Ana Alicia", isPresent: false }
        ]
    });

    useEffect(() => {
        const defaultTravelInfo = [
            {
                id: 0,
                type: "ida",
                departureTime: "06:30",
                durationTravel: "2:30",
                arrivalTime: "09:00",
                originCity: "Feira de Santana, BA",
                originAddress: "Av. Getúlio Vargas, 1200",
                destinyCity: "Salvador, BA",
                destinyAddress: "Rodoviária de Salvador",
                price: 85.00,
                availableSeats: 18,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 24),
                dateArrival: new Date(2025, 11, 24),
                company: "Travel Bus",
                driver: "Daniel Francisco",
                passengerManifest: createPassengerManifest()
            },
            {
                id: 1,
                type: "volta",
                departureTime: "08:00",
                durationTravel: "2:00",
                arrivalTime: "10:00",
                originCity: "Salvador, BA",
                originAddress: "Rodoviária de Salvador",
                destinyCity: "Feira de Santana, BA",
                destinyAddress: "Av. Getúlio Vargas, 1200",
                price: 80.00,
                availableSeats: 25,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 24),
                dateArrival: new Date(2025, 11, 24),
                company: "Travel Bus",
                driver: "Lucas Moreira",
                passengerManifest: createPassengerManifest()
            },
            {
                id: 2,
                type: "ida",
                departureTime: "09:30",
                durationTravel: "1:45",
                arrivalTime: "11:15",
                originCity: "Feira de Santana, BA",
                originAddress: "Terminal Central",
                destinyCity: "Cachoeira, BA",
                destinyAddress: "Terminal Rodoviário de Cachoeira",
                price: 65.00,
                availableSeats: 30,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 25),
                dateArrival: new Date(2025, 11, 25),
                company: "Travel Bus",
                driver: "Mariana Alves",
                passengerManifest: createPassengerManifest()
            },
            {
                id: 3,
                type: "volta",
                departureTime: "14:00",
                durationTravel: "1:45",
                arrivalTime: "15:45",
                originCity: "Cachoeira, BA",
                originAddress: "Terminal Rodoviário de Cachoeira",
                destinyCity: "Feira de Santana, BA",
                destinyAddress: "Terminal Central",
                price: 65.00,
                availableSeats: 22,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 25),
                dateArrival: new Date(2025, 11, 25),
                company: "Travel Bus",
                driver: "Thiago Pereira",
                passengerManifest: createPassengerManifest()
            },
            {
                id: 4,
                type: "ida",
                departureTime: "07:00",
                durationTravel: "1:30",
                arrivalTime: "08:30",
                originCity: "Alagoinhas, BA",
                originAddress: "Rodoviária de Alagoinhas",
                destinyCity: "Salvador, BA",
                destinyAddress: "Rodoviária de Salvador",
                price: 70.00,
                availableSeats: 15,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 26),
                dateArrival: new Date(2025, 11, 26),
                company: "Travel Bus",
                driver: "Rafael Martins",
                passengerManifest: createPassengerManifest()
            },
            {
                id: 5,
                type: "volta",
                departureTime: "18:30",
                durationTravel: "1:30",
                arrivalTime: "20:00",
                originCity: "Salvador, BA",
                originAddress: "Rodoviária de Salvador",
                destinyCity: "Alagoinhas, BA",
                destinyAddress: "Rodoviária de Alagoinhas",
                price: 70.00,
                availableSeats: 28,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 26),
                dateArrival: new Date(2025, 11, 26),
                company: "Travel Bus",
                driver: "Fernanda Lima",
                passengerManifest: createPassengerManifest()
            },
            {
                id: 6,
                type: "ida",
                departureTime: "10:00",
                durationTravel: "2:15",
                arrivalTime: "12:15",
                originCity: "Feira de Santana, BA",
                originAddress: "Terminal Central",
                destinyCity: "Salvador, BA",
                destinyAddress: "Rodoviária de Salvador",
                price: 90.00,
                availableSeats: 12,
                totalSeats: 40,
                dateDeparture: new Date(2025, 11, 28),
                dateArrival: new Date(2025, 11, 28),
                company: "Travel Bus",
                driver: "João Henrique",
                passengerManifest: createPassengerManifest()
            }
        ];

        setTravelInfo(prev => {
            if (prev.length > 0) return prev;
            return defaultTravelInfo;
        });
    }, []);


    return (
        <TravelContext.Provider value={{ travelInfo, setTravelInfo }}>
            {children}
        </TravelContext.Provider>
    );
}
