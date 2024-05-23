import React from 'react'
import { useState } from "react";
import Card from './Card';
import MensajeError from './MensajeError';
export default function Form() {
    const [cliente, setCliente] = useState({
        nombre: "",
        apellido: "",
        hobbie : ""
      });
      const [show, setShow] = useState(false);

      const [error, setError] = useState(false);

      const manejoEnvio = (e) => {
        console.log(cliente);
        e.preventDefault();
        if (cliente.nombre.length > 2 && cliente.apellido.length > 2 && cliente.hobbie.length > 3 ) {
          setShow(true);
          setError(false);
        } else {
          setError(true);
          setShow(false)
        }
      };

    return (
    <>
    <form onSubmit={manejoEnvio}>

   
        <label > Nombre:</label> <br />
        <input type="text"   onChange={(e) =>
            setCliente({ ...cliente, nombre: e.target.value })
          }/> <br />
        <label > Apellido:</label><br />
        <input type="text"  onChange={(e) =>
            setCliente({ ...cliente, apellido: e.target.value })
          }/> <br />
        <label > Hobbie:</label> <br />
        <input type="text"  onChange={(e) =>
            setCliente({ ...cliente, hobbie: e.target.value })
          } /> <br />

        <button type="submit" style={{ background: "black" , color : "white" , margin :"10px"}}>Enviar</button>
    </form>


    {show ? <Card cliente={cliente} /> : null}


      {error && <MensajeError />}
    </>
  )
}
