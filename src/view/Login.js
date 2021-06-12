import React from 'react'
import FormLogin from '../component/forms/FormLogin.js';
import { Link } from "react-router-dom";
import NavbarLogin from '../component/navbars/NavbarLogin.js';
import FooterIndex from '../component/footers/FooterIndex.js';

export default function Login(props) {
  const logear = (datos) => {
    console.log('Imprimiendo desde el componente padre Login');
    console.log(datos);
    /* await fetch("http://localhost:4000/api/v1/usuario", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then((data) => {
        setUser(user => data);
      })
      .catch((error) => {
        console.error("error", error)
      }); */
  }
  return (
    <div>
      <NavbarLogin />
      <div className=" container-fluid m-0 p-0 row">
        <div className="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-5">
          <div className="m-auto form-contenedor">
            <h4 className="text-white p-2 header-login mb-5 text-center">Login</h4>

            <FormLogin login={logear} />

            <div className="d-block p-2 mt-5">
              <p className="text-center d-block col-12">Aun no tienes cuenta: <Link to="/register" >Registrate</Link></p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-4 col-12 col-sm-10 col-md-10 col-lg-5 col-xl-6 mb-0 pb-0">
          <article className="col-8">
            <h5>
              Logea para comenzar a trabajar. Crea tus eventos y reuniones aqui. Servicio completo de primer calidad.
            </h5>
          </article>
        </div>
      </div>
      <FooterIndex />
    </div>
  );
}
