import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formUtils } from '../../../../../infrastructure/utils/formUtils';
import { sendTravelSearchTeste } from '../../../../../infrastructure/teste/sendTravelSearchTeste';
import '../styles/TravelSearchCard.css';

export default function TravelSearchCard({ id, formData, setFormData }) {

    const navigate = useNavigate();
    const url = "/customer/travel-list";

    const [tripType, setTripType] = useState("one-way");
    const [errors, setErrors] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = formUtils.getTravelSearchErrors(formData);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            const response = await sendTravelSearchTeste(formData);

            navigate(url, {
                state: { response }
            });

        } catch (error) {
            console.error("Erro ao enviar:", error);
        }
    }


    return (
        <section id={id}>
            <h2>Onde será sua próxima aventura?</h2>

            <form id='form-travel-search' onSubmit={handleSubmit}>

                <div id='form-group-origin' className="form-group">
                    <label className="form-label">Origem</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder='De onde você vai sair?'
                        name='cityOrigin'
                        value={formData.cityOrigin}
                        onChange={(e) => formUtils.handleChange(e, setFormData)}
                    />
                    <p className="input-error">
                        {errors.cityOrigin || " "}
                    </p>
                </div>



                {/*           <div id='form-group-destination' className="form-group">
                    <label class="form-label">Destino</label>
                    <input class="form-control " type="text" placeholder='Para onde você vai?' />
                </div>
                

                <div id='date-area' className="form-group form-row">
                    
                    <div id='form-group-departure-date' className='form-group-half'>
                        <label class="form-label">Data de Ida</label>
                        <input class="form-control "  type="date" />
                    </div>

                    <div id='form-group-return-date' className='form-group-half'>
                        <label class="form-label">Data de Volta</label>
                        <input class="form-control"  type="date" />
                    </div>
                </div>

                 <div id='radio-area' class="trip-type-way form-row">
                    <label class="radio-option">
                        <input type="radio" name="trip" value="one-way" />
                        <span>Somente Ida</span>
                    </label>

                    <label class="radio-option">
                        <input type="radio" name="trip" value="round-trip" />
                        <span>Ida e volta</span>
                    </label>
                </div>*/}

                <button
                    id='btn-search-travels'
                    className="btn btn-primary"
                    type="submit"
                >
                    Buscar
                </button>

            </form>
        </section>
    )
}
