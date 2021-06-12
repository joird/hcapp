import React, { useState, useEffect, useCallback } from 'react';
import RolRegistrar from '../component/forms/RolRegistrar.js';
import TablaMui from '../component/tags/TablaMui.js';

export default function Rol() {
  let url = 'http://localhost:4000/api/v1/rol';
  let urlSave = 'http://localhost:4000/api/v1/rol';
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const cellColumns = ['rol', 'descripcion'];

  /*  const data = [
     { id: 1, rol: '1111', descripcion: 'bbbb' },
     { id: 2, rol: '5555', descripcion: 'eeee' },
     { id: 3, rol: '4444', descripcion: 'aaaa' },
     { id: 4, rol: '2222', descripcion: 'cccc' },
     { id: 5, rol: '9999', descripcion: 'zzzz' },
     { id: 6, rol: '1111', descripcion: 'rrrr' },
     { id: 7, rol: '5555', descripcion: 'jjjj' },
     { id: 8, rol: '4444', descripcion: 'ssss' },
     { id: 9, rol: '2222', descripcion: 'bbbb' },
     { id: 10, rol: '9999', descripcion: 'pppp' },
   ] */

  const getFetch = useCallback(async () => {
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      setData(json);
    }
  }, [url]);

  useEffect(() => {
    getFetch();
  }, [getFetch, update]);

  const saveRol = (rol) => {
    console.log('guardando cambios nuevo rol');
    fetch(urlSave, {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify(rol), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  return (
    <div>

      <div className="container-fluid aling-align-items-center">
        <RolRegistrar setUpdate={setUpdate} />
        <TablaMui data={data} cellColumns={cellColumns} editable={true} save={saveRol} />
      </div>
    </div>
  )
}


