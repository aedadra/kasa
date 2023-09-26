import footer from "../../images/DesktopFooter.png"
import "../Mixin.scss"
import "./Footer.scss"
function Footer () {
    return (
        <div className="footer">
            <img  src={footer} alt="footer avec le logo"  />
        </div>
    )
}

export default Footer