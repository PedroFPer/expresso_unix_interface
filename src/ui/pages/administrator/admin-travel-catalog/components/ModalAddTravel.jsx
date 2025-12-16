import { useState, useContext } from "react";
import ModalHeaderAddTravel from "./ModalHeaderAddTravel";
import ModalFormAddTravel from "./ModalFormAddTravel"
import { TravelContext } from "../../../../../infrastructure/context/TravelProvider";
import { AdminContext } from "../../../../../infrastructure/context/AdminProvider";
import { validationsUtils } from "../../../../../infrastructure/utils/validationsUtils";
import "../styles/ModalAddTravel.css"

export default function ModalAddTravel({ openAddModal, handleToggleAddModal }) {
    const { travelInfo, setTravelInfo } = useContext(TravelContext);
    const { employees } = useContext(AdminContext);

    const [travel, setTravel] = useState({
        type: "",
        departureTime: "",
        durationTravel: "",
        arrivalTime: "",
        originCity: "",
        originAddress: "",
        destinyCity: "",
        destinyAddress: "",
        price: "",
        availableSeats: "",
        totalSeats: "",
        dateDeparture: "",
        dateArrival: "",
        company: "",
        driver: ""
    });

    const emptyTravel = {
        type: "",
        departureTime: "",
        durationTravel: "",
        arrivalTime: "",
        originCity: "",
        originAddress: "",
        destinyCity: "",
        destinyAddress: "",
        price: "",
        availableSeats: "",
        totalSeats: "",
        dateDeparture: "",
        dateArrival: "",
        company: "",
        driver: ""
    };

    const [errors, setErrors] = useState({
        type: "",
        departureTime: "",
        durationTravel: "",
        arrivalTime: "",
        originCity: "",
        originAddress: "",
        destinyCity: "",
        destinyAddress: "",
        price: "",
        availableSeats: "",
        totalSeats: "",
        dateDeparture: "",
        dateArrival: "",
        company: "",
        driver: ""
    });

    const validationMap = {
        type: "typeTravel",
        departureTime: "departureTime",
        durationTravel: "time",
        arrivalTime: "arrivalTime",
        originCity: "select",
        originAddress: "text",
        destinyCity: "select",
        destinyAddress: "text",
        price: "price",
        totalSeats: "totalSeats",
        dateDeparture: "dateDeparture",
        dateArrival: "dateArrival",
        driver: "select"
    };

    const handleInputChange = (attribute, value) => {
        const field = validationMap[attribute];


        setTravel(prev => ({
            ...prev,
            [attribute]: value
        }));


        const validation = validationsUtils.validateField(field, value);

        console.log(validation.message);

        setErrors(prev => ({
            ...prev,
            [attribute]: validation.valid ? "" : validation.message
        }));
    };

    const handleRegisterTravel = () => {
        const newErrors = {};

        const finalTravel = {
            id: travelInfo.length === 0 
    ? 0 
    : Math.max(...travelInfo.map(t => t.id)) + 1, 
            ...travel,
            dateDeparture: new Date(travel.dateDeparture),
            dateArrival: new Date(travel.dateArrival),
            company: "Travel Bus",
            availableSeats: travel.totalSeats,
        };


        Object.entries(validationMap).forEach(([attribute, field]) => {
            const validation =
                validationsUtils.validateField(field, travel[attribute]) ||
                { valid: false, message: "Campo inválido" };

            if (!validation.valid) {
                newErrors[attribute] = validation.message;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;


        setTravelInfo(prev => [...prev, finalTravel]);

        window.alert("Viagem cadastrada!");

        setTravel(emptyTravel);

        handleToggleAddModal();
    };

    return (
        <aside className={`modal-add-travel ${openAddModal ? "modal-add-travel-show" : "modal-add-travel-hidden"}`}>
            <ModalHeaderAddTravel ></ModalHeaderAddTravel>

            <ModalFormAddTravel
                handleInputChange={handleInputChange}
                handleRegisterTravel={handleRegisterTravel}
                employees={employees}
                travel={travel}
                errors={errors}
            />

            <div id="group-button-add-travel">
                <button id="cancel-button-add-travel" onClick={handleToggleAddModal}>Cancelar</button>
                <button id="continue-button-add-travel" onClick={handleRegisterTravel}>Continuar</button>

            </div>
        </aside>
    )
}