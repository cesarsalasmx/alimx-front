import React from "react";
import { Button, Container, Row } from "reactstrap";
import { useState } from "react";
//Components
import Name from "./Name";
import Birthday from "./Birthday";
import Contact from "./Contact";
import UserResponse from "./UserResponse";
import ConfirmData from "./ConfirmData";
//APOLO CLIENT
import { useMutation } from '@apollo/client';
import { gql } from "graphql-tag";
// Define mutation
const addUser = gql`
  mutation addUser(
        $nombre: String!,
        $segundoNombre: String!,
        $apellidoPaterno: String!,
        $apellidoMaterno: String!,
        $fechaNacimiento: String!,
        $email: String!,
        $telefon: String!
      ){
        nombre,
        segundoNombre,
        apellidoPaterno,
        apellidoMaterno,
        fechaNacimiento
        email,
        telefono
      }
`;


const emptyFullName = ["","","",""];
const emptyBirthday = ["","",""];
const emptyContact = ["",""]
const Chat = () => {
    const [fullName, setFullName ] = useState(emptyFullName);
    const [birthday, setBirthday] = useState(emptyBirthday);
    const [contact, setContact] = useState(emptyContact);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [CreateUser] = useMutation(addUser);
    const sendData = ()=>{
        CreateUser({ variables:{
            nombre: fullName[0],
            segundoNombre:fullName[1],
            apellidoPaterno:fullName[2],
            apellidoMaterno:fullName[3],
            fechaNacimiento:birthday[0]+"/"+birthday[1]+"/"+birthday[2],
            email: contact[0],
            telefono: contact[1]
        }});
        alert("¡Usuario Creado!");
    }
    return (
        <Container>
            <Row>
                <div className="chat col align-self-center">
                    <div className="chatHeader">
                        <h1>Comunicate con nosotros</h1>
                        <p>Respondemos en menos de 5 minutos.</p>
                    </div>
                    <div className="messages">
                         <Name fullName={fullName} setFullName={setFullName} setStep2={setStep2}/>
                        { step2 ? <UserResponse text={fullName} /> : null }
                        { step2 ? <Birthday birthday={birthday} setBirthday={setBirthday} setStep3={setStep3}/> : null }
                        { step3 ? <UserResponse text={birthday} /> : null }
                        { step3 ?<Contact contact={contact} setContact={setContact} setConfirm={setConfirm}/> : null }
                        { confirm ? <UserResponse text={contact} /> : null }
                        { confirm ? <ConfirmData name={fullName} birthday={birthday} contact={contact} /> : null }
                        { confirm ? <Button onClick={sendData}>Confirmar</Button> : null}
                       
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Chat;