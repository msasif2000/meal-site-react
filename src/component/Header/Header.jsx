import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="bg-pink-200 rounded-bl-full rounded-br-full">
            <nav className="md:container mx-auto py-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/meals">Meals</NavLink>
            </nav>
        </div>
    );
};

export default Header;