import React from 'react'
import { Link } from "react-router-dom";

export default function NavbarLogin() {
  return (
    <nav className="barra-index col-12">
      <div className="d-flex col-12 align-items-center ">
        <img alt="" className="p-4 col-3 col-sm-2 col-xl-1 logo col-1 text-left" />
        <div className="pt-2 col-3 col-sm-2 col-xl-1 font-weight-light">Informacion</div>
        <div className="pt-2 col-1 font-weight-light">Contacto</div>
        <div className="ml-auto pt-2 col-3 text-right">
          <Link to="/register" className="boton-registrate col-2">Registrate</Link>
        </div>
      </div>
    </nav>
  );
}