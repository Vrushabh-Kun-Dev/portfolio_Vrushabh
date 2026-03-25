import './Navbar.css'
import logo from '../../../public/logo.png'
import { Link } from 'react-scroll';
import contact from '../../assets/contact.png'
const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <img src={logo} alt="Logo" className='logo' />
                <div className="desktopMenu">
                    <Link className='desktopMenuListItem'>Home</Link>
                    <Link className='desktopMenuListItem'>About</Link>
                    <Link className='desktopMenuListItem'>Portfolio</Link>
                    <Link className='desktopMenuListItem'>Clients</Link>
                </div>
                <button className='desktopMenuBtn'>
                    <img src={contact} alt="" className="desktopMenuImg" />Contact Me
                </button>
            </nav>
        </>
    )
}


export default Navbar;