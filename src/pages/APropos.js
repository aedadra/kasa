import "../styles/APropos.scss"
import montagnes from "../Montagnes-a-propos.png"
import APropos from "../components/APropos"

function Propos() {    

    return (
        <div>
            <img src={montagnes} alt="montagnes" />
            <div className="section-a-propos">         
            <APropos title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."  />
            <APropos title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <APropos title="Service" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <APropos title="securite" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </div>
    )

 }

export default Propos