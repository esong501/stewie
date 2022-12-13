import './Header.scss';
import logo from '../../img/logo.svg';

function Header() {
    return (
        <div className="header">
            <a href="/" className="logo"><img src={logo} alt="" /></a>
            <div className="header-right">
                {/* {window.location.href.indexOf("/browse") === -1 ? <a className="active" href="/">Home</a> : <a href="/">Home</a>}
                {window.location.href.indexOf("/browse") > -1  ? <a className="active" href="/browse">Cook</a> : <a href="/browse">Cook</a>} */}
                <a href="/">Home</a>
                <a href="/browse">Recipes</a>
        </div>
  </div>
    )
}

export default Header;