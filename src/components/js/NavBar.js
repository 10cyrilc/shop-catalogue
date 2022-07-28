import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import "../styles/NavBar.css"
import Home from "./Home"



export default function NavBar() {
    const [inputText, setInputText] = useState("");
    let InputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="main-nav">
                    <Navbar.Brand href="">Catalogue</Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={InputHandler}
                        />
                    </Form>
                </Container>
            </Navbar>
            <Home input={inputText} />
        </>
    )
}