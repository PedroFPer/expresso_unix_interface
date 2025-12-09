import { useState } from "react";
import ModalHeaderAddTravel from "./ModalHeaderAddTravel";
import ModalFormAddTravel from "./ModalFormAddTravel"
import ModalPreviewAddTravel from "./ModalPreviewAddTravel";
import "../styles/ModalAddTravel.css"

export default function ModalAddTravel({openModal}){
    const [activeTab, setActiveTab] = useState("form");
    console.log(openModal)
   
       return (
           <aside className={`modal-add-travel ${openModal ? "modal-add-travel-show" : "modal-add-travel-hidden"}`}>
               <ModalHeaderAddTravel activeTab={activeTab} setActiveTab={setActiveTab}></ModalHeaderAddTravel>
   
               {activeTab === "form" && <ModalFormAddTravel />}
               {activeTab === "preview" && <ModalPreviewAddTravel />}
   
               <div id="group-button-add-travel">
                   <button id="cancel-button-add-travel">Cancelar</button>
                   <button id="continue-button-add-travel">Continuar</button>
           
               </div>
           </aside>
       )
}