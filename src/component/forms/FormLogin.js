import React, { useState } from 'react';
import '../../assets/css/form-login.css';

export default function FormLogin(props) {
  const [errors, setErrors] = useState({});
  const [valores, setValores] = useState({});
  const [passShow, setPassShow] = useState(false);

  const togglePass = () => {
    setPassShow(passShow ? false : true);
  }

  const validar = () => {
    const errores = {};
    if (!valores.usuario) {
      errores.usuario = 'Usuario es obligatorio';
    }
    if (!valores.pass) {
      errores.pass = 'Contraseña incorrecta.';
    }
    setErrors(errors => errores);
    return errores;
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValores({ ...valores, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let errores = validar();
    if (Object.keys(errores).length === 0) {
      /* console.log('Enviando datos.');
      console.log(valores); */
      props.login(valores);
    } else {
      console.log('Hay errores no se envio.');
      console.log(errores);
    }

  }

  return (
    <form className="container-fluid form-login" onSubmit={handleSubmit}>

      <label htmlFor="id-usuariol" className="col-12 pl-5 d-block mb-1 pl-0">Usuario</label>
      <i className="imagen-usuario col-1 d-inline-block align-middle"></i>
      <input type="text" name="usuario" id="id-usuariol" onChange={handleChange} className="input-login col-11 d-inline-block" />
      <p className="col-12 d-block error-mensaje pl-5 text-left">{errors.usuario}</p>

      <label htmlFor="id-passl" className="col-12 pl-5 d-block mb-1 pl-0">Contraseña</label>
      <i className="imagen-password col-1 d-inline-block align-middle"></i>
      <input type={passShow ? "text" : "password"} name="pass" id="id-passl" onChange={handleChange} className="input-login col-11 d-inline" />
      <i className="ojo align-middle col-1 d-inline " id="boton-ojo" onClick={togglePass}></i>
      <p className="col-12 d-block error-mensaje pl-5 text-left">{errors.pass}</p>

      <input type="submit" value="Login" className="col-8 d-block m-auto boton-login" />
    </form>
  );
}