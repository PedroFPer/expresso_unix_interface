import { useState } from 'react';
import HeaderHomeMobile from '../../../common-components/header-mobile/HeaderHomeMobile';
import TravelSearchCard from './Components/TravelSearchCard'
import { tripValidations } from '../../../../infrastructure/validators/tripValidations';
import './styles/HomePage.css';

export default function HomePage() {
    const [formData, setFormData] = useState({
        cityOrigin: "",
        cityDestination: "",
        departureDate: "",
        returnDate: "",
        tripType: ""
    })

    const [errors, setErrors] = useState({});

    return (
        <div id="customer-home-page">
            <HeaderHomeMobile id={"header-home-mobile"} />
            <TravelSearchCard
                id={"travel-search-card"}
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors} />
        </div>
    )
}