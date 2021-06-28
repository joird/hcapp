import React, { useState } from 'react';
import UsuarioRegistrar from '../component/forms/UsuarioRegistrar';
import NavBarIndex from '../component/navbars/NavbarIndex';
export default function Registro(props) {
  const [user, setUser] = useState();

  const registrando = async (datos) => {
    console.log('Imprimiendo desde componente padre Registro');
    console.log(datos);
    await fetch("http://localhost:4000/api/v1/usuario", {
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
      });

    console.log('imprimiendo algo');
    console.log(user);
  };

  return (
    <>
      <NavBarIndex />
      <UsuarioRegistrar />
    </>
  )
}