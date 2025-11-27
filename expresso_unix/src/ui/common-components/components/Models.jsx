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
            <div>
              
              <div>
                <h3></h3>
                <input type="text" />

              </div>
              <div>
                <h3></h3>
                <input type="email" name="" id="" />
                
              </div>

              <div>
                <h3></h3>
                
                <select 
                value={Role} 
                    onChange={(e) => setRole(e.target.value)}
                   >
                  <option value="">Selecione um cargo</option>
                  <option>Motorista</option>
                   <option>Diretor</option>
                  <option>Atendente</option>
                </select>
              </div>

              <div>
                <h3></h3>
                <select 
                    value={Status} 
                    onChange={(e) => setStatus(e.target.value)}
                    >
                    <option value="">Selecione um status</option>
                    <option>Ativo</option>
                    <option>Férias</option>
                 </select>
              </div>
              
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Models;
