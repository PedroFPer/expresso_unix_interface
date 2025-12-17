import { createContext, useState, useEffect } from "react";

export const DriverContext = createContext();

export function DriverProvider({ children }) {
    const [driverCredentials, setDriverCredentials] = useState({});

    useEffect(() => {

        const defaultDriverCredentials = {
            email: "Name@email.com",
            password: "Dragon2023"
        }

        setDriverCredentials(defaultDriverCredentials);
    }, []);

    return (
        <DriverContext.Provider
            value={{
                driverCredentials,
                setDriverCredentials,
            }}
        >
            {children}
        </DriverContext.Provider>
    )
}