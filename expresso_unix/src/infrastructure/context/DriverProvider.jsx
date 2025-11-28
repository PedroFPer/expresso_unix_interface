import { createContext, useState, useEffect } from "react";

export const DriverContext = createContext();

export function DriverProvider({ children }) {
    const [driverCredentials, setDriverCredentials] = useState({});
    const [travelInfo, setTravelInfo] = useState([]);
    const [passengerList, setPassengerList] = useState([]);

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
                price: 80.00,
                availableSeats: 20,
                totalSeats: 40,
                date: new Date(2025, 10, 24),
                company: "Travel Bus",
                driver: "Daniel Frascisco"
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
                price: 80.00,
                availableSeats: 20,
                totalSeats: 40,
                date: new Date(2025, 10, 29),
                company: "Travel Bus",
                driver: "Lucas Moreira"
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
                price: 80.00,
                availableSeats: 20,
                totalSeats: 40,
                date: new Date(2025, 10, 29),
                company: "Travel Bus",
                driver: "Mariana Alves"
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
                price: 80.00,
                availableSeats: 20,
                totalSeats: 40,
                date: new Date(2025, 10, 29),
                company: "Travel Bus",
                driver: "Thiago Pereira"
            }
        ];


        const defaultDriverCredentials = {
            email: "",
            password: ""
        }

        const defaultPassengerList = {
            idManifestList: 1,
            isFinalized: false, // indica se a lista já foi finalizada
            passengers: [
                { id: 1, name: "Pedro Ferreira", isPresent: "Ausente" },
                { id: 2, name: "Lucas Andrade", isPresent: "Ausente" },
                { id: 3, name: "Mariana Souza", isPresent: "Ausente" },
                { id: 4, name: "Bruna Carvalho", isPresent: "Ausente" },
                { id: 5, name: "Gustavo Oliveira", isPresent: "Ausente" },
                { id: 6, name: "Fernanda Lima", isPresent: "Ausente" },
                { id: 7, name: "Rafael Martins", isPresent: "Ausente" },
                { id: 8, name: "Camila Duarte", isPresent: "Ausente" },
                { id: 9, name: "João Henrique", isPresent: "Ausente" },
                { id: 10, name: "Ana Vitória", isPresent: "Ausente" },
                { id: 11, name: "Ana Alicia", isPresent: "Ausente" }
            ]
        };


        setTravelInfo(defaultTravelInfo);
        setDriverCredentials(defaultDriverCredentials);
        setPassengerList(defaultPassengerList)
    }, []);

    return (
        <DriverContext.Provider
            value={{
                driverCredentials,
                setDriverCredentials,
                travelInfo,
                setTravelInfo,
                passengerList,
                setPassengerList
            }}
        >
            {children}
        </DriverContext.Provider>
    )
}