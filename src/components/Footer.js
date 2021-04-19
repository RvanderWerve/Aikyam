import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown, NavItem, NavLink} from "react-bootstrap";
import { useState } from 'react';


export default function Footer() {
    const [dNone, setDNone] =  useState("d-none")
const showForm = ()=>{
    if(dNone==="d-none"){
setDNone("");
    } else{
        setDNone("d-none");
    }
}
    return (
        <div>
            
 <Form className={`newsform ${dNone}`}>
  <Form.Group controlId="formEmail">
    <Form.Label className="form-text">Email adres</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group controlId="formVoornaam">
    <Form.Label className="form-text">Voornaam / First name</Form.Label>
    <Form.Control type="text" placeholder="Voornaam" required />
  </Form.Group>
  <Form.Group controlId="formAchternaam">
    <Form.Label className="form-text">Achternaam / Last name</Form.Label>
    <Form.Control type="text" placeholder="Achternaam" required/>
  </Form.Group>
  <Button variant="secondary" type="submit" className="newsbutton">
    Aanmelden nieuwsbrief NL
  </Button>
  <Button variant="secondary" type="submit" className="newsbutton">
Sign up for newsletter UK</Button>
</Form>
<   footer>
<div className="row ml-0 mr-0"><div className="col-sm-4 signup-button"><Button variant="secondary" type="submit" onClick={showForm}>Aanmelden nieuwsbrief</Button></div>
                <div className="col-sm-4"><img src="Aikyam final grey sm2.png" alt=""/></div>
                <div className="col-sm-4"><p>  Algemene footer  copyright</p></div>
                </div>
    </footer>
</div>
    )
}
