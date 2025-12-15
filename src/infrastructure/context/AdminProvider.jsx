import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export function AdminProvider({ children }) {
    const [adminInfo, setAdminInfo] = useState({
        email: "admin@email.com",
        password: "Dragon2023"
    });


    const [employees, setEmployees] = useState([{
        id: "",
        name: "",
        email: "",
        role: "",
        password: "",
        status: ""
    }])

    useEffect(() => {


        const defaultEmployees = [
            { id: crypto.randomUUID(), name: "Pedro Pereira Oliveira Souza", email: "PedroOliveiraTravel@gmail.com", role: "Adm", status: "Ativo" },
            { id: crypto.randomUUID(), name: "Maria Silva", email: "MariaSilva@email.com", role: "Motorista", status: "Ativo" },
            { id: crypto.randomUUID(), name: "João Santos", email: "JoaoSantos@email.com", role: "Gestor", status: "Desligado" },
            { id: crypto.randomUUID(), name: "Ana Costa", email: "AnaCosta@email.com", role: "Motorista", status: "Ativo" }
        ];



        setEmployees(defaultEmployees);
    }, []);




    return (
        <AdminContext.Provider
            value={{
                adminInfo,
                setAdminInfo,
                employees,
                setEmployees
            }}
        >
            {children}
        </AdminContext.Provider>
    );


}