import "../styles/InfoCardModel.css"

export default function InfoCardModel({infoCard}){
  return (
    <section id="info-card-model">
      <strong>{infoCard.titleCard}</strong>
      <p>{infoCard.describe}</p>
    </section>
  )
}
