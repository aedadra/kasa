import { Link } from 'react-router-dom'
import Logo from "../Logo.png"

function Header() {
    return (
        <div className='header'>
            <Link to="../"> <img src={Logo} alt="logo" className='logo' /></Link>
            <nav>
                <Link to="../">Accueil</Link>
                <Link to="../APropos">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header