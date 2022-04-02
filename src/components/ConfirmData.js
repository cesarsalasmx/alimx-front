import React from "react";

const ConfirmData = (props) => {
   
    return(
        <div className="botMessage">
            <h3>Confirma tus datos:</h3>
            <p>Nombre Completo: { props.name.map((x)=>{return x+" ";})}</p>
            <p>Fecha de nacimiento: { props.birthday.map((x)=>{return x+" ";})}</p>
            <p>Correo Electrónico: { props.contact[0] }</p>
            <p>Teléfono: { props.contact[1] }</p>
        </div>
    );
};

export default ConfirmData;