import React, { Component } from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                    <Nav.Link><Link to="/faq">FAQ</Link></Nav.Link>
                </Nav>
                <Form inline>
                    <Button href="https://www.facebook.com/mule.app.96" className="btn-facebook btn-brand icon"><i className="fa fa-facebook" target="blank" ></i></Button>
                    <Button href="https://twitter.com/mule_app" className="btn-twitter btn-brand icon"><i className="fa fa-twitter" target="blank"></i></Button>
                </Form>
            </Navbar>
        )
    }
}
