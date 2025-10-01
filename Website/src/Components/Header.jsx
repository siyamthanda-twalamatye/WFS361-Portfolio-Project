import { Link } from 'react-router-dom';
import '../styles/Header.css'

function Header(){
    return (
        <nav className='header'>
            <h1>Siyamthanda Twalamatye</h1>
            <nav className='header-links'>
            <a className='homeText'><Link to="/">Home</Link></a>
            <a><Link to="/about">About</Link></a>
            <a><Link to="/project">Projects</Link></a>
            <a><Link to="/contact">Contact</Link></a>
            </nav>
            
        </nav>
    )
    
}
export default Header
