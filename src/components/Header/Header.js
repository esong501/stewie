import './Header.scss';
import { useState, useEffect} from 'react';
import logo from '../../img/logo.svg';

function Header(props) {
    const [onHome, setPage] = useState(true);
    const page = window.location.href.charAt(window.location.href.length - 1);

    // useEffect(() => {
    //     console.log(onHome);
    // })

    // const handleClick = (page) => {
    //     setPage(page);
    // }

    return (
        <div className="header">
            <a href="/" className="logo"><img src={logo} alt="" /></a>
            <div className="header-right">
                {/* <a className="active" href="#home">Home</a> */}
                {/* <a href="/">Home</a> */}
                {page === "/" ? <a className="active" href="/">Home</a> : <a href="/">Home</a>}
                {page !== "/" ? <a className="active" href="/browse">Cook</a> : <a href="/browse">Cook</a>}
                {/* <a href="/browse">Cook</a> */}
        </div>
  </div>
    )
}

export default Header;