import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [infoDoctor, setInfoDoctor] = useState({})
  const paramsDoc = useParams()

  const detalleDoc = async () => {
    const info = await fetch('https://jsonplaceholder.typicode.com/users/' + paramsDoc.id)
      .then((response) => {
        return response.json()
      })
    setInfoDoctor(info)
  }
  useEffect(() => {
    detalleDoc()
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>Odontólogo(a): {infoDoctor.name}<br />
        Correo Electrónico: {infoDoctor.email}<br />
        Teléfono: {infoDoctor.phone}<br />
        Sitio Web: {infoDoctor.website}</div>
    </>
  )
}

export default Detail