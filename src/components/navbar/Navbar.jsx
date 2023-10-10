import React from 'react';
import './navbar.css';
import heartFill from "../../assets/images/heart-fill.png";
import notification from "../../assets/images/notification.png";
import cog from "../../assets/images/cog.png";
import profile from "../../assets/images/profile.png";
import search from "../../assets/images/search.png";
import filter from "../../assets/images/filter.png";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand order-1" href="index.html">morent</a>
                <ul className="navbar-nav flex-grow-1 align-items-center justify-content-end order-2 order-md-3">
                    <li className="nav-item d-none d-md-block">
                        <a className="nav-link" href="/">
                            <img src={heartFill} alt="icon" className="img-fluid" />
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a className="nav-link" href="/">
                            <img src={notification} alt="icon" className="img-fluid" />
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a className="nav-link" href="/">
                            <img src={cog} alt="icon" className="img-fluid" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <img src={profile} alt="profile" className="img-fluid" />
                        </a>
                    </li>
                </ul>
                <div className="d-flex align-items-center order-3 order-md-2 mt-5 mt-md-0">
                    <form action="/">
                        <button type="button" className="btn btn-primary">
                            <img src={search} alt="search icon" className="img-fluid" />
                        </button>
                        <input type="text" className="form-control" placeholder="Search something here" />
                        <button type="button" className="btn btn-primary">
                            <img src={filter} alt="filter icon" className="img-fluid" />
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Navbar