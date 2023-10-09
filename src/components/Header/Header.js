import { NavLink } from 'react-router-dom'
import Logo from "../../images/Logo.png"
import "../Mixin.scss"
import "./Header.scss"

function Header() {

    return (
        <div className='header header-display'>
            <NavLink to="../"> <img src={Logo} alt="logo" className='header-logo' /></NavLink>
            <nav className='header__nav header-display'>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    } to="../">Accueil</NavLink>

                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    } to="../APropos">A Propos</NavLink>
            </nav>
        </div>
    )
}

export default Header