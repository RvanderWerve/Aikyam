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
        <div className="foot">
            
 <Form className={`newsform ${dNone}`}>
  <Form.Group controlId="formEmail">
    <Form.Label className="form-text">Email adres</Form.Label>
    <Form.Control className="form-width" type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group controlId="formVoornaam">
    <Form.Label className="form-text">Voornaam / First name</Form.Label>
    <Form.Control className="form-width" type="text" placeholder="Voornaam" required />
  </Form.Group>
  <Form.Group controlId="formAchternaam">
    <Form.Label className="form-text">Achternaam / Last name</Form.Label>
    <Form.Control className="form-width" type="text" placeholder="Achternaam" required/>
  </Form.Group>
  <Form.Group controlId="formRemarks">
    <Form.Label className="form-text">Opmerkingen / remarks</Form.Label>
    <Form.Control as="textarea" rows={3} cols={18} className="form-width" type="text" placeholder="Remarks" />
  </Form.Group>

</Form>
<   footer>
<div className="row ml-0 mr-0"><div className="col-sm-4 signup-button"><Button variant="secondary" type="submit" onClick={showForm}>Aanmelden nieuwsbrief</Button></div>
                <div className="col-sm-4"><img src="Aikyam final white sm.png" alt=""/></div>
                <div className="col-sm-4"><p>  Algemene footer  copyright</p></div>
                </div>
    </footer>
</div>
    )
}
