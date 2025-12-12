import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export function AdminProvider({ children }) {
    const [adminInfo, setAdminInfo] = useState({
        email: "",
        password: ""
    });

    const [travelInfo, setTravelInfo] = useState([]);

    const [employees, setEmployees] = useState([{
        id: "",
        name: "",
        email: "",
        role: "",
        password: "",
        status: ""
    }])

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
                date: new Date(2025, 11, 23),
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
                date: new Date(2025, 11, 23),
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
                date: new Date(2025, 11, 24),
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
                date: new Date(2025, 11, 25),
                company: "Travel Bus",
                driver: "Thiago Pereira"
            }
        ];

        const defaultEmployees = [
            { id: crypto.randomUUID(), name: "Pedro Pereira Oliveira Souza", email: "PedroOliveiraTravel@gmail.com", role: "Adm", status: "Ativo" },
            { id: crypto.randomUUID(), name: "Maria Silva", email: "MariaSilva@email.com", role: "Motorista", status: "Ativo" },
            { id: crypto.randomUUID(), name: "João Santos", email: "JoaoSantos@email.com", role: "Gestor", status: "Inativo" },
            { id: crypto.randomUUID(), name: "Ana Costa", email: "AnaCosta@email.com", role: "Motorista", status: "Ativo" }
        ];


        setTravelInfo(defaultTravelInfo);

        setEmployees(defaultEmployees);
    }, []);




    return (
        <AdminContext.Provider
            value={{
                adminInfo,
                setAdminInfo,
                travelInfo,
                setTravelInfo,
                employees,
                setEmployees
            }}
        >
            {children}
        </AdminContext.Provider>
    );


}