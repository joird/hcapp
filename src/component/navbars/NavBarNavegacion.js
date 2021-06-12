import React from 'react'
import { Link } from 'react-router-dom';
//import '../../assets/css/navegacion-navbar.css';

export default function NavBarNavegacion() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand logo"></Link>
      <p className="navbar-brand" href="#">Navbar</p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <p className="nav-link">Home <span className="sr-only">(current)</span></p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Link</p>
          </li>
          <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Admin
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/rol" className="dropdown-item">Roles</Link>
              <Link to="/permiso" className="dropdown-item">Permisos</Link>
              <div className="dropdown-divider"></div>
              <Link to="/nada" className="dropdown-item">Nada</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
