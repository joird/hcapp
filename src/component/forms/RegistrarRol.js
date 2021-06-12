import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AlertSuccess, AlertWarning } from '../tags/Alerts.js';

export default function RegistrarRol({setUpdate}) {
  const [rol, setRol] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errorRol, setErrorRol] = useState('');
  const [errorDescripcion, setErrorDescripcion] = useState('');
  const [alert, setAlert] = useState(<></>);
  let update = false;
  
  const registroCorrecto = () => {
    setAlert(<AlertSuccess show={Math.random()} message={"Rol registrado correctamente."} />);
  }

  const registroIncorrecto = () => {
    setAlert(<AlertWarning show={Math.random()} message={"Hay errores verifica los datos."} />);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorRol('');
    setErrorDescripcion('');
    if (rol.length >= 3 && descripcion.length >= 10) {
      const datos = { rol: rol.trim().replace(/\s\s+/g, ' '), descripcion: descripcion.trim().replace(/\s\s+/g, ' ') };
      const res = await fetch("http://localhost:4000/api/v1/rol", {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-type": "application/json"
        }
      }).then(response => { return response });
      if (res.ok) {
        const datos = await res.json();
        console.log(datos);
        registroCorrecto();
      }
    } else {
      if (rol.length < 3) {
        setErrorRol('Obligatorio y mayor a 2 caracteres.');
      }
      if (descripcion.length < 10) {
        setErrorDescripcion('Obligatorio y mayor a 10 caracteres.');
      }
      registroIncorrecto();
    }
  }

  return (
    <div>
      {alert}
      <div className="card col-9 col-sm-7 col-lg-5 col-xl-4 p-0 m-auto">
        <div className="card-header">
          Registra un nuevo rol
      </div>
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Rol</Form.Label>
              <Form.Control value={rol} onChange={e => setRol(e.target.value)} name="rol" id="rolid" />
              <Form.Text className="text-danger">
                {errorRol}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3} value={descripcion} onChange={e => setDescripcion(e.target.value)} name="descripcion" id="descripcionid" />
              <Form.Text className="text-danger">
                {errorDescripcion}
              </Form.Text>
            </Form.Group>
            <Button className="m-auto" variant="primary" type="submit">Guardar</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
