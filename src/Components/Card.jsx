import React from "react";
import { Link } from "react-router-dom";
import { setFavoritosStorage, eliminarDeFavorito, esFavorito } from "./utils/metodosLocalStorage";


const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (esFavorito(id)) {
      eliminarDeFavorito(id, name);
    } else {
      const odontologoFav = { name, username, id };
      setFavoritosStorage(odontologoFav);
    }
  }
  return (
    <div className="card">
      <Link to={'dentist/' + id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <div>
          <img src="./images/doctor.jpg" alt="Doctor" width='100px' />
          Odontólogo(a):{name}<br />
          username: {username}<br />
          Identificador: {id}
        </div>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      </Link>
      <button onClick={addFav} className="favButton">Agregar a Favorito {esFavorito(id) ? "⭐" : "✩"}</button>
    </div>
  );
};

export default Card;
