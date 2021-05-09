import { Link, parsePath } from 'gatsby';
import React from 'react';
import { navigate } from 'gatsby';
import {Navbar, Nav, Dropdown} from "react-bootstrap";


let language = '';
let missie = 'Missie';
let bron = 'Bron';
let samen = 'Samen';
let activiteiten = 'Activiteiten';
let nieuws = 'Nieuws';
let contact = 'Contact';
let doneer = 'DONEER'
// let pathname = parsePath;







export default function Header({setUk, setNl}) {

    const handleClickNl =(e)=>{
        e.preventDefault();
    language = '';
    missie = 'Missie';
    bron = 'Bron';
    samen = 'Samen';
    activiteiten = 'Activiteiten';
    nieuws = 'Nieuws';
    contact = 'Contact';
    doneer = 'DONEER'
    navigate (`/${language}`);
    }

    const handleClickUk =(e)=>{
        e.preventDefault();
    language = 'uk';
    missie = 'Mission';
    bron = 'Source';
    samen = 'Together';
    activiteiten = 'Activities';
    nieuws = 'News';
    contact = 'Contact';
    doneer = 'DONATE'
    navigate (`/${language}`);
    }
    // const pathname = globalHistory.location.pathname;
    const ListLink = props => (
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to={props.to}>{props.children}</Link>
        </li>
      )
    return (
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="">
  <Navbar.Brand className='col col-pad-0' href={`/${language}`}><img src="Aikyam final white sm.png" alt="Aikyam logo" height="60"/></Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav variant="pills" className="mr-auto ml-auto col-md-10">
          <Nav as="ul">
          <Nav.Item as="li" className="links">
            <Link className="link" to={`/${language}`} activeClassName="active btn">Home</Link>
          </Nav.Item>
          <Nav.Item as="li" className="links">
            <Link className="link" to={`/missie${language}`} activeClassName="active btn">{missie}</Link>
          </Nav.Item>
          <Nav.Item as="li" className="links">
            <Link className="link" to={`/bron${language}`} activeClassName="active btn">{bron}</Link>
          </Nav.Item>
          <Nav.Item as="li" className="links">
            <Link className="link" to={`/samen${language}`} activeClassName="active btn">{samen}</Link>
          </Nav.Item>
          <Nav.Item as="li" className="links">
            <Link className="link" to={`/activiteiten${language}`} activeClassName="active btn">{activiteiten}</Link>
          </Nav.Item>
          <Nav.Item as="li" className="links">
            <Link className="link" to={`/nieuws${language}`} activeClassName="active btn">{nieuws}</Link>
          </Nav.Item>
          
          {/* 
          //dropdown menu
          <Dropdown className="dropdowns btn">
          <Dropdown.Toggle as="a" className="dropdowns">{nieuws}</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
               <Link className="drop-item " to={`/missie${language}`} ><Dropdown.Item as="li" className="drop-item btn ">{missie}</Dropdown.Item></Link>
                <Link className="drop-item " to={`/bron${language}`} ><Dropdown.Item as="li" className="drop-item btn "> {bron}</Dropdown.Item></Link>
            </Dropdown.Menu>
          </Dropdown> */}
          <Nav.Item as="li" className="links">
            <Link className="link" to={`/contact${language}`} activeClassName="active btn">{contact}</Link>
          </Nav.Item>
      </Nav>
    </Nav>
    <Nav as="ul" className="rightpart col-md-2">
        <Link className="link-doneer" to={`/doneer${language}`} activeClassName="doneer-active btn">
    <Nav.Item as="li" className="doneer"><img className="doneer-image" src="flower Aikyam icon.png" height="22px"/>
    <div className="doneer-text">{doneer} </div></Nav.Item></Link>
    <Nav as="ul" id='flag-div'>
      <Nav.Item as="li" className="links flag">
        <input type="image" src="nl-flag.png" height="15px" alt="NL" onClick={ handleClickNl }></input>
      </Nav.Item>
      <Nav.Item as="li" className="links flag">
        <input type="image" src="uk-flag.png" height="15px" alt="EN" onClick={handleClickUk}></input>
      </Nav.Item>
    </Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    
       
    )
}


