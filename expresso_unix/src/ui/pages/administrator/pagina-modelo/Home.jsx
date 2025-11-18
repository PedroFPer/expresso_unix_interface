import PopUp from "../../../common-components/pagina-modelo/Components/PopUp";
import SideBar from "../../../common-components/pagina-modelo/Components/SideBar";
import Models from "../../../common-components/pagina-modelo/Components/Models";
import "./styles/Home.css";


function Home() {
    return (
        <div className="grid-geral">
            <SideBar/>
            <main>
                
                <Models></Models>

                    
                
                 

            </main>
            
        </div>
    )
}

export default Home;