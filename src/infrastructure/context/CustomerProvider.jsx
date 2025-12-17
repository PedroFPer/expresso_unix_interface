import { createContext, useState, useEffect  } from "react";

export const CustomerContext = createContext();

export function CustomerProvider({ children }) { 
    const [travelerInfo, setTravelerInfo] = useState({});  
    const [ticketInfo, setTicketInfo] = useState({});     


    return (
        <CustomerContext.Provider
            value={{
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
