import React from 'react'
import Logear from '../component/forms/Logear';

export default function Login(props) {
  const asd = (datos) => {
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
    <>
      <Logear />
    </>

  );
}
