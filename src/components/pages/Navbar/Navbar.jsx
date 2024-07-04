import { Link } from 'react-router-dom';
import '../../../components/assets/css/NavStyle.css';

function Navbar() {
    return (
        <nav className = 'nav-bar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
