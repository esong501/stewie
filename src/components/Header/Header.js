import './Header.scss';
import { useState, useEffect} from 'react';
import logo from '../../img/logo.svg';

function Header(props) {
    const [currPage, setPage] = useState("/");
    // const page = "";

    useEffect(() => {
        console.log(currPage);
    })

    const handleClick = (page) => {
        setPage(page);
        console.log(currPage);
    }

    return (
        <div className="header">
            <a href="/" className="logo"><img src={logo} alt="" /></a>
            <div className="header-right">
                {/* <a className="active" href="#home">Home</a> */}
                {/* <a href="/">Home</a> */}
                {currPage === "/" ? <a className="active" href="/" onClick={() => handleClick("/")}>Home</a> : <a href="/" onClick={() => handleClick("/")}>Home</a>}
                {currPage === "/browse" ? <a className="active" href="/browse" onClick={() => handleClick("/browse")}>Cook</a> : <a href="/browse"  onClick={() => handleClick("/browse")}>Cook</a>}
                {/* <a href="/browse">Cook</a> */}
        </div>
  </div>
    )
}

export default Header;