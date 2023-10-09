import montagnes from "../images/Montagnes-a-propos.png"
import Collapse from "../components/Collapse/Collapse"
import "../styles/APropos.scss"

function Propos() {

    return (
        <div className="about-page">
            <img className="about-page__img" src={montagnes} alt="montagnes" />
            <div className="about-page__elements">
                <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title="Securite" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
        </div>
    )
}

export default Propos