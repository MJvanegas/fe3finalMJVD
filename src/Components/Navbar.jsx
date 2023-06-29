import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
        <h1 className='nav-item-title'><span>D</span>H Odonto</h1>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/contact">Contacto</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar