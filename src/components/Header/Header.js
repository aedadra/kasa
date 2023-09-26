import { Link } from 'react-router-dom'
import Logo from "../../images/Logo.png"
import "../Mixin.scss"
import "./Header.scss"

function Header() {
    return (
        <div className='header header-display'>
            <Link to="../"> <img src={Logo} alt="logo" className='header-logo' /></Link>
            <nav className='header__nav header-display'>
                <Link to="../">Accueil</Link>
                <Link to="../APropos">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header