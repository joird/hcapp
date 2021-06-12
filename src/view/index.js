import React from 'react'
import NavbarIndex from '../component/navbars/NavbarIndex.js';
import FooterIndex from '../component/footers/FooterIndex.js';
import { Link } from 'react-router-dom';
import {Heart} from 'bootstrap-icons-react';
import '../assets/css/index-principal.css';
import profile from '../assets/img/profile.png';

export default function index() {
  /* const hace = () => {
    console.log("estoy en hace");
    fetch('http://localhost:4000/api/v1/permiso')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  } */

  return (
    <div>
      <div className="c-index">

        <NavbarIndex />
        <div className="d-flex justify-content-center m-auto  col-12">
          <h4 className="col-4"> Ingresa con tu cuenta</h4>          
          <img className="col-3 p-4 m-auto" alt="" src={profile} />
          <h4 className="col-4"> Registrate en nuestro sitio <Heart/></h4>
        </div>

        <div className="d-flex justify-content-center m-auto  col-8">

          <Link to="/login" className="boton-login-registro col-3" >Login</Link>
          <Link to="/register" className="boton-login-registro col-3">Registrate</Link>

        </div>
      </div>

      <FooterIndex />
    </div>
  )
}
