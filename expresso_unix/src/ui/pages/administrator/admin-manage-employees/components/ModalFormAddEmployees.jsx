import { useState } from "react";
import "../styles/ModalFormAddEmployees.css"

export default function ModalFormAddEmployees() {

    return (
        <form id="modl-form-add-employees">
           <div className="input-row-full">
            <label>Nome do Funcionário</label>
            <input 
            type="text"
            placeholder="Exemplo: Lucas da Silva" />
           </div>

           <div className="input-row-two-columns"></div>
        </form>
    )
}