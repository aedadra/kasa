import { useState } from "react";
import "../styles/LogementDetails.scss"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel"
import Tags from "../components/Tags/Tags";
import Host from "../components/Host/Host";
import Rating from "../components/Rating/Rating"
import Collapse from "../components/Collapse/Collapse"


function LogementDetails () {
   
    const params = useParams ()
    const [logementDetails, setLogementDetails] = useState ()
	const navigate = useNavigate();
    
    useEffect (() => {
        fetch ("/logements.json")
            .then((response) => response.json ())
            .then((data) => { 
				const chosen = data.find(({id})  => id === params.id)
				setLogementDetails(chosen)
				if (chosen === undefined) {
					navigate("/Error", { state: { message: "L'appartement n'est pas disponible" } });
				}
            })
            .catch ((error) => console.log (error))
}, [params, navigate])

    const carrousel = logementDetails && logementDetails.pictures;
	const tags = logementDetails && logementDetails.tags;
	const equipements = logementDetails && logementDetails.equipments.map ((equipments) => {return (<li>{equipments}</li>) })
	

	return (
		<div className="logement-page" key={params.id} >
		{logementDetails && 
		<div>
			<div>
			<Carrousel carrousel={carrousel} />
			</div>
			<div className="logement-page__display">
			<div className="logement-page__text">
				<h1 className="logement-page__title">{logementDetails.title}</h1>
				<h3 className="logement-page__location">{logementDetails.location}</h3>
				<div className="logement-page__tags" >
					{tags.map ((tags) =>						
				<Tags key={tags} tags={tags} />	
				)}							
				</div>
			</div>	
			<div className="logement-page__host">
				<div >
				<Host
					hostName={logementDetails.host.name}
					hostImage={logementDetails.host.picture} />
				</div>
				<div className="logement-page__host-rate">
					<Rating note={logementDetails.rating} />
				</div>
			</div>
			</div>
					
						<div className="logement-page__collapse logement-page__display">
							<div className="logement-page__collapse--description">
							<Collapse title="Description" content={logementDetails.description} />
							</div>
							<div className="logement-page__collapse--equipements">
								
							<Collapse title="Équipements" content={equipements} />
							
							</div>
						</div>
				
		</div>
			
			}
		</div>
	)
}


export default LogementDetails