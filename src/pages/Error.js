import ImgError from "../images/404.png"
import "./Home"
import "../styles/Error.scss"

function Error() {
    return (
        <div className="error-page">
                <img src={ImgError} alt=""/>
                <p className="error-page__text error-page__p">Oups! La page que vous demandez n'existe pas.</p>
                <a className="error-page__text error-page__lien" href="/">Retourner sur la page d'accueil</a>
        </div>
    )
}
 
export default Error