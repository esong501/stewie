import './Header.scss';
import logo from '../../img/logo.svg';

function Header() {
    const page = window.location.href.charAt(window.location.href.length - 1);
    return (
        <div className="header">
            <a href="/" className="logo"><img src={logo} alt="" /></a>
            <div className="header-right">
                {page === "/" ? <a className="active" href="/">Home</a> : <a href="/">Home</a>}
                {page !== "/" ? <a className="active" href="/browse">Cook</a> : <a href="/browse">Cook</a>}
        </div>
  </div>
    )
}

export default Header;