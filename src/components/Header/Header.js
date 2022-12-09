import './Header.scss';
import logo from '../../img/logo.svg';

function Header() {
    return (
        <div className="header">
            <a href="/" className="logo"><img src={logo} alt="" /></a>
            <div className="header-right">
                {/* <a className="active" href="#home">Home</a> */}
                <a href="/">Home</a>
                <a href="/browse">Cook</a>
        </div>
  </div>
    )
}

export default Header;