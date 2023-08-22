import { Link } from "react-router-dom";

export default function Navbar() {

   return(
    <div className="navbar">
        <div className="logo">
            <Link to={'/'}>
                <h1 id="logo-text">BAS</h1>
            </Link>
        </div>

        <nav className="nav">
            
            <span className="nav-item">
                <i className="fa-solid fa-user"></i>
                <p>Account</p>
            </span>

            <button className="button-secondary button">List an item</button>
        </nav>

        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </div>
   )
}