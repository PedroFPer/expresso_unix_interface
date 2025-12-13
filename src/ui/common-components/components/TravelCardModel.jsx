import line from "../../../assets/line-travel-card.png"
import profile from "../../../assets/profile-img-model.png"

export default function TravelCardModel({
  departure = "07:00",
  duration = "2:00",
  arrival = "09:00",
  origin = "Feira de Santana, BA",
  destiny = "Salvador, BA",
  price = "R$ 80,00",
  company = "Travel Bus"
}) {
  return (
    <article className="travel-card">
      
      <div className="travel-times">
        <span>{departure}</span>
        <span>{duration}</span>
        <span>{arrival}</span>

        <figure>
          <img src={line} alt="Linha representando o percurso da viagem" />
        </figure>

        <span>{origin}</span>
        <span>{destiny}</span>
      </div>

      <div className="travel-price">
        <span>{price}</span>
      </div>

      <div className="company-info">
        <figure>
          <img src={profile} alt="Imagem do perfil da empresa" />
        </figure>
        <span>{company}</span>
      </div>

      <div className="travel-type">
        <i className="bi bi-arrow-down-up"></i>
        <span>Ida e Volta</span>
      </div>

    </article>
  );
}
