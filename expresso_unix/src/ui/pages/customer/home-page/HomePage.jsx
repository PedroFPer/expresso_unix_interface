import './styles/HomePage.css';
import HeaderHomeMobile from '../../../common-components/header-mobile/HeaderHomeMobile';
import TravelSearchCard from './Components/TravelSearchCard'

export default function HomePage(){
    return(
        <div id="customer-home-page">
            <HeaderHomeMobile id={"header-home-mobile"}  />
            <TravelSearchCard id={"travel-search-card"} />
        </div>
    )
}