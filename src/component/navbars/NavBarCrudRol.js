import React from 'react'


export default function NavBarCrudRol(props) {

 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">            
            <button className="btn nav-link p-1" onClick={() => props.cambiar(1)}>Registrar Rol </button>
          </li>
          <li className="nav-item">
            <button className="btn nav-link p-1" onClick={() => props.cambiar(2)}>Modificar Roles</button>
          </li>          
          <li className="nav-item">
            <div className="nav-link disabled">Disabled</div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
