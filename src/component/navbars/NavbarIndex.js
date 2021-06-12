import React from 'react';
import '../../assets/css/index-navbar.css';

export default function NavbarIndex() {
  return (
    <nav className="barra-index col-12 d-block">    
      <div className="d-flex flex-row justify-content-center pt-5">
      <div className="pt-2 col-3 col-sm-2 col-xl-1 font-weight-light">Informacion</div>
      <img alt="" className="p-3 col-3 col-sm-2 col-xl-1 logo col-1 text-left" />
      <div className="pt-2 col-1 font-weight-light">Contacto</div>
      </div> 
    </nav>
  )
}
