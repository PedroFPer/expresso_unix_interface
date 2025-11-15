import { useState } from 'react';
import HeaderHomeMobile from '../../../common-components/header-mobile/HeaderHomeMobile';
import TravelSearchCard from './Components/TravelSearchCard'
import './styles/HomePage.css';

export default function HomePage() {
    const [formData, setFormData] = useState({
        cityOrigin: "",
        cityDestination: "",
        departureDate: "",
        returnDate: "",
        tripType: ""
    })


    return (
        <div id="customer-home-page">
            <HeaderHomeMobile id={"header-home-mobile"} />
            <TravelSearchCard
                id={"travel-search-card"}
                formData={formData}
                setFormData={setFormData}
                 />
        </div>
    )
}