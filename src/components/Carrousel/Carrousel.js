import { useState } from "react";
import VectorLeft from "../../images/VectorLeft.png"
import VectorRight from "../../images/VectorRight.png"
import "../Mixin.scss"
import "./Carrousel.scss"

function Carrousel ({carrousel}) {
    const [image, setImage] = useState(0)
    const boucle = carrousel.length
    const nextImage = () => {
		setImage(image === boucle - 1 ? 0 : image + 1)
	};
	const previousImage = () => {
		setImage(image === 0 ? boucle - 1 : image - 1)
	};

    return (
		<figcaption className="carrousel">
			<div className="carrousel__vector">
				<div className="carrousel__vector2">
			{boucle > 1 && (
				<img src={VectorLeft} alt="fleche vers la gauche" onClick={previousImage} className="carrousel__vector--arrow"/>
			)}
			
			{boucle > 1 && (
				<img src={VectorRight} alt="fleche vers la droite" onClick={nextImage} className="carrousel__vector--arrow" />
			)}
			</div>
			</div>
			{carrousel.map((carrousel, index) => {
				return (
					<div>
          			<div key={index} className="carrousel__image" >
           				{index === image && (
              			<img src={carrousel} alt="img-appartement"  />
            			)}  
					</div>	         
		    		<div className="carrousel__index">
						{index === image && boucle > 1 && (
              			<span className="carrousel__index--position">
                		{image + 1}/{boucle}
              			</span>
            			)}
					</div>
					</div>
          			
        		);
      		})}
		</figcaption>
	);
}

export default Carrousel
