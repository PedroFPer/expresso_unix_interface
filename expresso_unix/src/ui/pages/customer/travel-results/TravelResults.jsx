import HeaderBaseMobile from "../../../common-components/header-base-mobile/HeaderBaseMobile"
import TravelDayCarousel from "../../../common-components/travel-day-carousel/TravelDayCarousel"
import TravelCardModel from "../../../common-components/travel-card-model/TravelCardModel"
import "./styles/TravelResults.css"

export default function TravelResults(){
    const destinationCity = "Salvador-BA"
    const textHeader = `Indo para ${destinationCity}`
   
    return(
        <div id="travel-results">
            <HeaderBaseMobile textHeader={textHeader}  />
            <TravelDayCarousel />
            <TravelCardModel />
        </div>
    )
}