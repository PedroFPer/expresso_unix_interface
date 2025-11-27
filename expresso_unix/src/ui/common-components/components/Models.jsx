import { useState } from "react";
import Modelo from "../../pages/customer/passenger-registration/PassengerRegistration"
import "../styles/Models.css";

function Models({ TitleButton, TitleModel }) {
  const [ModelsIsClosed, setModelsIsClosed] = useState(true);
  const[Status, setStatus] = useState("");
  const [Role, setRole] = useState("");

  return (
    <div className="background-container">
      <button 
          className="button-open-model" 
          onClick={() => setModelsIsClosed(false)}
        >
          {TitleButton}
        </button>
      {ModelsIsClosed ? (
        <div></div>
      ) : (
        <div 
          className="background-overlay" 
          onClick={() => setModelsIsClosed(true)}  
        >
          <div 
            className="models" 
            onClick={(e) => e.stopPropagation()}  
          >
            
            <h1>{TitleModel}</h1>
            

          </div>
        </div>
      )}

    </div>
  );
}

export default Models;
