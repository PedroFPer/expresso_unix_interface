import { useLocation } from "react-router-dom";

export default function TravelList(){
    const { state } = useLocation();
    return(
        <div>
            <pre>{JSON.stringify(state?.response, null, 2)}</pre>
        </div>
    )
}