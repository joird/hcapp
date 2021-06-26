import React, { useContext } from 'react'
import Logear from '../component/forms/Logear';
//import UserContext from '../context/user/UserContext';
import NavBarIndex from '../component/navbars/NavbarIndex';

export default function Login() {
  //const { setUser, user } = useContext(UserContext);

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
      <NavBarIndex />
      <Logear />
    </>

  );
}
