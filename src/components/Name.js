import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
const Name = ({fullName, setFullName, setStep2}) => {
    const handleSubmit = () =>{
        fullName = [primerNombre,segundoNombre,apllidoPaterno,apellidoMaterno];
        setFullName(fullName);
        setHiddenButton(true);
        setStep2(true);
    }
    const [hiddenButton,setHiddenButton] = useState(false);
    const [primerNombre, setPrimerNombre ] = useState("");
    const [segundoNombre, setSegundoNombre ] = useState("");
    const [apllidoPaterno, setApellidPaterno ] = useState("");
    const [apellidoMaterno, setApellidMaterno ] = useState("");
    return (
        <>
            <div className="botMessage">
                <h3>¿Cuál es tu nombre?</h3>
                <Form>
                    <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        type="text"
                        value={primerNombre}
                        onChange={ event => setPrimerNombre(event.target.value)}
                    />
                    <Input
                        id="segundoNombre"
                        name="segundoNombre"
                        placeholder="Segundo Nombre"
                        type="text"
                        value={segundoNombre}
                        onChange={ event => setSegundoNombre(event.target.value)}
                    />
                    <Input
                        id="apllidoPaterno"
                        name="apllidoPaterno"
                        placeholder="Apllido Paterno"
                        type="text"
                        value={apllidoPaterno}
                        onChange={ event => setApellidPaterno(event.target.value)}
                    />
                    <Input
                        id="apellidoMaterno"
                        name="apellidoMaterno"
                        placeholder="Apellido Materno"
                        type="text"
                        value={apellidoMaterno}
                        onChange={ event => setApellidMaterno(event.target.value)}
                    />
                    { !hiddenButton ? <Button onClick={handleSubmit}>Confirmar</Button> : null }
                </Form>
            </div>
        </>
    );
};

export default Name;