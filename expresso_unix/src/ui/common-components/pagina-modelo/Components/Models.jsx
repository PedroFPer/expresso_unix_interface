import { useState } from "react";
import "../styles/Models.css";

function Models({ TitleButton, TitleModel }) {
  const [ModelsIsClosed, setModelsIsClosed] = useState(true);

  return (
    <div className="background-container">

      {ModelsIsClosed ? (
        <button 
          className="button-open-model" 
          onClick={() => setModelsIsClosed(false)}
        >
          Abrir
        </button>
      ) : (
        <div 
          className="background-overlay" 
          onClick={() => setModelsIsClosed(true)}  
        >
          <div 
            className="models" 
            onClick={(e) => e.stopPropagation()}  
          >
            
            <h1>Modelo aberto</h1>
          </div>
        </div>
      )}

    </div>
  );
}

export default Models;
