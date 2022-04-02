import React from "react";
import { Button, Form, Input } from "reactstrap";

import { useState } from "react";
const Birthday = ({birthday, setBirthday, setStep3}) => {
    const handleSubmit = () => {
        birthday = [dia,mes,anio];
        setBirthday (birthday);
        setHiddenButton(true);
        setStep3(true);
    }
    const [hiddenButton,setHiddenButton] = useState(false);
    const [dia, setDia ] = useState("");
    const [mes, setMes] = useState("");
    const [anio, setAnio] = useState("");
    return (
        <>
            <div className="botMessage">
                <h3>¿Cuál es tu fecha de nacimiento?</h3>
                <Form>
                    <Input
                        id="dia"
                        name="dia"
                        placeholder="Día"
                        type="number"
                        min={1}
                        max={31}
                        value={dia}
                        onChange={event => setDia(event.target.value)}
                    />
                    <Input
                        id="mes"
                        name="mes"
                        placeholder="Mes"
                        type="text"
                        value={mes}
                        onChange={event => setMes(event.target.value)}
                    />
                    <Input
                        id="anio"
                        name="anio"
                        placeholder="Año"
                        type="number"
                        min={1990}
                        max={2022}
                        value={anio}
                        onChange={event => setAnio(event.target.value)}
                    />
                    { !hiddenButton ? <Button onClick={handleSubmit}>Confirmar</Button> : null }
                </Form>
            </div>
        </>
    );
};
export default Birthday;