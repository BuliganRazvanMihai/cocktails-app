import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Link to="/">
                Cocktail App
            </Link>
        <Nav className="me-auto">
        <Link to="/" >
                Cocktail List
        </Link>
        <Link to="/ingredients">
                Ingredient List
         </Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
