import React, { useState } from 'react';
import Data from '../local.json';
import {
  Collapse,
  Navbar,
  NavbarToggler,

  Nav,
  NavItem,
  
  
 
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  var loggedInUser;

  Data.map((detail,index)=>{

    if(detail.logged === true){
      loggedInUser = detail.name
    }

    return 0;

  })

  return (
    <div>
      <Navbar expand="md" className="navbar">
       
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="ml-auto">
            <div className="center">
             <NavItem><img src="assets/user.svg" alt = "user" height="35" width="35" ></img></NavItem>
              <span style={{fontSize:15}}>{loggedInUser}</span>
            </div>
         
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;