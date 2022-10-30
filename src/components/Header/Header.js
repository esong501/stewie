import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    return (
        <div class="header">
            {/* <a href="#default" class="logo">stewie</a> */}
            <Link to="/" class="logo">stewie</Link>
            <div class="header-right">
                <Link to="/recipe">Recipes</Link>
                {/* <a class="active" href="#home">Home</a>
                <a href="#recipes">Recipes</a>
                <a href="#progress">Progress</a> */}
            <a href="#progress">Progress</a> 
        </div>
  </div>
    )
}

export default Header;