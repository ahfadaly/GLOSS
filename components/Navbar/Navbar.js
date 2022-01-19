import React from 'react';
import Link from 'next/link'
const Navbar = () => {
    return (
      
        <header className="container">
          <div className="nav-bg">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link href="/"><a className="navbar-brand"><h2>GLOSS<span>SLOGAN IS HERE</span></h2></a></Link>
                  <button className="navbar-toggler border-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className=""><i className="fas fa-align-right fa-lg"></i></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto ul-list">
                          <Link href="/">
                            <li className="nav-item">
                                <i className="fas fa-home fa-lg"></i>
                              <a className="nav-link active" aria-current="page">Home</a>
                            </li>
                          </Link>
                          <Link href="/Gallery">
                              <li className="nav-item">
                                  <i className="far fa-image fa-lg"></i>
                                <a className="nav-link">Gallery</a>
                              </li>
                            </Link>
                            <Link href="/About">
                                <li className="nav-item">
                                    <i className="far fa-address-card fa-lg"></i>
                                  <a className="nav-link">About</a>
                                </li>
                            </Link>
                            <Link href="/Contact">
                              <li className="nav-item">
                                  <i className="fas fa-envelope fa-lg"></i>
                                <a className="nav-link">Contact</a>
                              </li>
                            </Link>
                        </ul>
                   </div>
             </nav>
            </div>
         </header>
    );
};

export default Navbar;