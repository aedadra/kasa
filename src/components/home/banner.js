import falaise from "../../images/Falaises-home.png"
import "../Mixin.scss"
import "./banner.scss"

function Banner (){
    
    return (
    <figcaption className="img-home">
      <img className="img-home__img" src={falaise} alt="falaises surplombées d'une foret" />
      <div className="img-home__text">
      <p className="img-home__p">Chez vous, partout et ailleurs </p>
      </div>
    </figcaption>
    )
}
export default Banner