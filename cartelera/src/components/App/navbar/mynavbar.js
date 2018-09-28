import React, {Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './mynavbar.css';
import { Navbar, NavItem, Nav} from 'react-bootstrap';


export default class myNavbar extends Component {
    render()
      {
        return(
               <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Link1
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link2
                    </NavItem>
                 </Nav>
            </Navbar>
        );
    };
}