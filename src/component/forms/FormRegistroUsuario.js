import React, { useState } from 'react';
import '../../assets/css/form-registro.css';

export default function FormRegistroUsuario(props) {
  const label6 = 'col-6 d-inline-block mb-1 pl-5';
  const input5 = 'input-registro col-5 col-sm-5 col-md-5 d-inline-block';
  const errorp6 = 'col-6 text-left d-inline-block pl-5 error-text mb-1';
  const errorp12 = 'col-12 d-inline-block pl-5 error-text mb-1';
  const input11 = 'input-registro col-11 col-sm-11 col-md-11';
  const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [errors, setErrors] = useState({});
  const [valores, setValores] = useState({});
  const [passShow, setPassShow] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValores({ ...valores, [name]: value });
  }

  const validar = () => {
    const errores = {};
    if (!valores.apellido) {
      errores.apellido = 'Apellido obligatorio';
    }
    if (!valores.dni) {
      errores.dni = 'DNI obligatorio.';
    } else if (valores.dni.length < 8) {
      errores.dni = 'DNI invalido.';
    }
    if (!valores.email) {
      errores.email = 'Email obligatorio.';
    } else if (!valores.email.match(regExEmail)) {
      errores.email = 'Email invalido.';
    }
    if (!valores.fechaNacimiento) {
      errores.fechaNacimiento = 'Fecha Nacimiento obligatorio.';
    }
    if (!valores.nombre) {
      errores.nombre = 'Nombre obligatorio.';
    } else if (valores.nombre < 2) {
      errores.nombre = 'Nombre muy corto.';
    }
    if (!valores.pass) {
      errores.pass = 'Contraseña obligatorio.';
    } else if (valores.pass.length < 8) {
      errores.pass = 'Contraseña muy corta. Minimo 8 caracteres.';
    }
    if (!valores.usuario) {
      errores.usuario = 'Usuario obligatorio';
    }
    setErrors(errors => errores);
    return errores;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errores = validar();
    if (Object.keys(errores).length === 0) {
      console.log('Enviando datos.');
      props.registrar(valores);
      //console.log(valores);
    } else {
      console.log('Hay errores no se envio.');
      console.log(errores);
    }
  }

  const togglePass = () => {
    setPassShow(passShow ? false : true);
  }

  return (
    <form className="container-fluid form-registro " onSubmit={handleSubmit}>
      <label htmlFor="id-nombrer" className={label6}>Nombre</label>
      <label htmlFor="id-apellidor" className={label6}>Apellido</label>
      <i className="imagen-nombre col-1 d-inline-block align-middle"></i>
      <input type="text" onChange={handleChange} className={input5} name="nombre" id="id-nombrer" maxLength="30" />
      <i className="imagen-apellido col-1 d-inline-block align-middle "></i>
      <input type="text" onChange={handleChange} className={input5} name="apellido" id="id-apellidor" maxLength="30" />
      <p className={errorp6}>{errors.nombre}</p>
      <p className={errorp6}>{errors.apellido}</p>

      <label htmlFor="id-usuarior" className="col-12 pl-5 d-block mb-1 pl-0">Usuario</label>
      <i className="imagen-user col-1 d-inline-block align-middle"></i>
      <input type="text" onChange={handleChange} className={input11} name="usuario" id="id-usuarior" maxLength="64" />
      <p className={errorp12} id="error-usuarior">{errors.usuario}</p>

      <label htmlFor="id-emailr" className="col-12 pl-5 d-block mb-1 ">Email</label>
      <i className="imagen-email col-1 d-inline-block align-middle"></i>
      <input type="text" onChange={handleChange} className={input11} name="email" id="id-emailr" maxLength="64" />
      <p className={errorp12} id="error-emailr">{errors.email}</p>

      <label htmlFor="id-passr" className="col-12 pl-5 d-block mb-1 ">Contraseña</label>
      <i className="imagen-pass col-1 d-inline-block align-middle"></i>
      <input type={passShow ? "text" : "password"} onChange={handleChange} className={input11} name="pass" id="id-passr" maxLength="64" />
      <i onClick={togglePass} className="ojo align-middle col-1" id="boton-ojo"></i>
      <p className={errorp12} id="error-passr">{errors.pass}</p>

      <label htmlFor="id-dnir" className={label6}>DNI</label>
      <label htmlFor="id-fechar" className={label6}>Fecha Nacimiento</label>
      <i className="imagen-dni col-1 d-inline-block align-middle"></i>
      <input type="text" onChange={handleChange} className={input5} name="dni" id="id-dnir" maxLength="9" />
      <i className="imagen-fecha col-1 d-inline-block align-middle"></i>
      <input type="date" onChange={handleChange} className={input5} name="fechaNacimiento" id="id-fechar" step="1" min="1960-01-01" max="2010-01-01" />
      <p className={errorp6} id="error-dnir">{errors.dni}</p>
      <p className={errorp6} id="error-fechar">{errors.fechaNacimiento}</p>

      <input type="submit" value="Registro" className="col-8 d-block mt-3 ml-auto mr-auto boton-registro" />
    </form>
  )
}
