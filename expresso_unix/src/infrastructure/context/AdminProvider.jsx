import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export function AdminProvider({ children }) {
    const [adminInfo, setAdminInfo] = useState({
        email: "",
        password: ""
    });


    return (
            <AdminContext.Provider
                value={{
                    adminInfo,
                    setAdminInfo
                }}
            >
                {children}
            </AdminContext.Provider>
        );


}