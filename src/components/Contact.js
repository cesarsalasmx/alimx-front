import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
const Contact = ({contact,setContact,setConfirm}) => {
    const handleSubmit = () => {
        contact = [email,telefono];
        setContact(contact);
        setHiddenButton(true);
        setConfirm(true);
    }
    const [hiddenButton,setHiddenButton] = useState(false);
    const [email,setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    return (
        <>
            <div className="botMessage">
                <h3>Datos de contacto</h3>
                <Form>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Input
                        id="telefono"
                        name="telefono"
                        placeholder="Teléfono"
                        type="tel"
                        value={telefono}
                        onChange={event => setTelefono(event.target.value)}
                    />
                    { !hiddenButton ? <Button onClick={handleSubmit}>Confirmar</Button> : null }
                </Form>
            </div>
        </>
    );
};
export default Contact;