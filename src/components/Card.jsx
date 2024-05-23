const Card = ({ cliente }) => {
    const { nombre, apellido , hobbie } = cliente;
    return (
      <div>
        <h4>Muchas gracias, {nombre} , {apellido}!</h4>
        <h5>Sabemos que a ti te gusta: {hobbie}</h5>
      </div>
    );
  };
  
  export default Card;