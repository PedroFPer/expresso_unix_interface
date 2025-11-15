import banner from '../../../assets/banner-image-header-home-mobile.png'
import profile from '../../../assets/profile-image-header-home-mobile.png'
import "./styles/HeaderHomeMobile.css"

export default function HeaderHomeMobile({id}){
    return(
        <header id={id}>
            <figure id='banner-image'><img src={banner} alt="banner-image-header-home-mobile" /></figure>
            <div id='profile-card'>
                <div id='profile-info'>
                    <h1>Travel Bus</h1>
                    <p>Rua Oito de Dezembro, 0 - Pirajá, Salvador- BA, 00000-000</p>
                </div>
                 <figure id='profile-image'><img src={profile} alt="perfil-image-header-home-mobile" /></figure>
            </div>
        </header>
    )
}