import { maskUtils } from "../../../../../infrastructure/utils/maskUtils"
import "../styles/ModalFormAddTravel.css"

export default function ModalFormAddTravel({ handleInputChange, handleRegisterTravel, travel, errors }) {


    return (
        <form id="modal-form-add-travel" onSubmit={handleRegisterTravel}>

            <div className="input-row-two-columns">
                <div className="item-row-two-columns">
                    <label>Origem <span>(Obrigatório)</span></label>
                    <select
                        value={travel.originCity}
                        onChange={(e) =>
                            handleInputChange("originCity", e.target.value)
                        }
                    >
                        <option value="">Escolha a origem</option>
                        <option value="Salvador, BA">Salvador, BA</option>
                        <option value="Cachoeira, BA">Cachoeira, BA</option>
                        <option value="Alagonhias, BA">Alagonhias, BA</option>
                    </select>

                    <p className="input-error">
                        {errors.originCity || "\u00A0"}
                    </p>
                </div>
                <div className="item-row-two-columns">
                    <label>Destino <span>(Obrigatório)</span></label>
                    <select
                        value={travel.destinyCity}
                        onChange={(e) => handleInputChange("destinyCity", e.target.value)}
                    >
                        <option value="">Escolha o destino</option>
                        <option value="Salvador, BA">Salvador, BA</option>
                        <option value="Cachoeira, BA">Cachoeira, BA</option>
                        <option value="Alagonhias, BA">Alagonhias, BA</option>
                    </select>

                    <p className="input-error">
                        {errors.destinyCity || "\u00A0"}
                    </p>
                </div>
            </div>

            <div className="input-row-full">
                <label>Local de Embarque<span>(Obrigatório)</span></label>
                <input
                    type="text"
                    placeholder="Praça da Sé, 406 - Pelourinho, Salvador - BA, 40020-210"
                    value={travel.originAddress}
                    onChange={(e) => handleInputChange("originAddress", e.target.value)}
                />
                <p className="input-error">
                    {errors.originAddress || "\u00A0"}
                </p>

            </div>

            <div className="input-row-full">
                <label>Local de Desembarque<span>(Obrigatório)</span></label>
                <input
                    type="text"
                    placeholder="R. Augusto dos Anjos, 65 - Rua Nova, Feira de Santana - BA, 40301-110"
                    value={travel.destinyAddress}
                    onChange={(e) => handleInputChange("destinyAddress", e.target.value)}
                />
                <p className="input-error">
                    {errors.destinyAddress || "\u00A0"}
                </p>
            </div>

            <div className="input-row-two-columns">
                <div className="item-row-two-columns">
                    <label>Data de Saída <span>(Obrigatório)</span></label>
                    <input
                        type="date"
                        value={travel.dateDeparture}
                        onChange={(e) => handleInputChange("dateDeparture", e.target.value)} />

                    <p className="input-error">
                        {errors.dateDeparture || "\u00A0"}
                    </p>
                </div>
                <div className="item-row-two-columns">
                    <label>Data de Chegada <span>(Obrigatório)</span></label>
                    <input
                        type="date"
                        value={travel.dateArrival}
                        onChange={(e) => handleInputChange("dateArrival", e.target.value)} />

                    <p className="input-error">
                        {errors.dateArrival || "\u00A0"}
                    </p>
                </div>
            </div>


            <div className="input-row-two-columns">
                <div className="item-row-two-columns">
                    <label>Horario de Saída <span>(Obrigatório)</span></label>
                    <input type="time"
                        value={travel.departureTime}
                        onChange={(e) => handleInputChange("departureTime", e.target.value)} />
                    <p className="input-error">
                        {errors.departureTime || "\u00A0"}
                    </p>
                </div>
                <div className="item-row-two-columns">
                    <label>Horario de Chegada <span>(Obrigatório)</span></label>
                    <input type="time"
                        value={travel.arrivalTime}
                        onChange={(e) => handleInputChange("arrivalTime", e.target.value)} />

                    <p className="input-error">
                        {errors.arrivalTime || "\u00A0"}
                    </p>
                </div>
            </div>

            <div className="input-row-two-columns">
                <div className="item-row-two-columns">
                    <label>Número de Assentos <span>(Obrigatório)</span></label>
                    <input type="number"
                        value={travel.totalSeats}
                        onChange={(e) => handleInputChange("totalSeats", e.target.value)} />
                    <p className="input-error">
                        {errors.totalSeats || "\u00A0"}
                    </p>
                </div>
                <div className="item-row-two-columns">
                    <label>Valor da Passagem <span>(Obrigatório)</span></label>
                    <input type="text"
                        value={maskUtils.maskCurrencyBRL(travel.price)}
                        onChange={(e) => handleInputChange("price", maskUtils.unmaskCurrencyBRL(e.target.value))} />

                    <p className="input-error">
                        {errors.price || "\u00A0"}
                    </p>
                </div>
            </div>

            <div className="input-row-full">
                <label>Motorista Responsável<span>(Obrigatório)</span></label>
                <select
                    value={travel.driver}
                    onChange={(e) =>
                        handleInputChange("driver", e.target.value)
                    }
                >
                    <option value="">Escolha o Motorista</option>
                    <option value="Lucas Moreira">Lucas Moreira</option>
                    <option value="Maria Mariana">Maria Mariana</option>
                    <option value="Rodrigo Rodil">Rodrigo Rodil</option>
                </select>
                <p className="input-error">
                    {errors.driver || "\u00A0"}
                </p>
            </div>

            

        </form>
    )
}