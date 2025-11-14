import { Link } from 'react-router-dom'
import '../styles/TravelSearchCard.css';

export default function TravelSearchCard({id}) {
    return (
        <section id={id}>
            <h2>Onde será sua próxima aventura?</h2>
            <form id='form-travel-search'>

                <div id='form-group-origin' className="form-group">
                    <label class="form-label">Origem</label>
                    <input class="form-control"  type="text" placeholder='De onde você vai sair?' />
                </div>

                <div id='form-group-destination' className="form-group">
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
                        <input type="radio" name="trip" value="one-way" checked />
                        <span>Somente Ida</span>
                    </label>

                    <label class="radio-option">
                        <input type="radio" name="trip" value="round-trip" />
                        <span>Ida e volta</span>
                    </label>
                </div>
                
                <Link to="/customer/travel-list" id='btn-search-travels' className="btn btn-primary ">Buscar</Link>	

            </form>
        </section>
    )
}