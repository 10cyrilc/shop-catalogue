import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Products } from "../data/Products"
import "../styles/Home.css"


function Home(props) {

    const [Datalen, setDatalen] = useState(true);

    const filteredData = Products.filter((item) => {
        if (props.input === '') {
            return item;
        }
        else {
            return item.name.toLowerCase().includes(props.input)
        }
    })
    const HandleChange = () => {
        if (filteredData.length <= 0) {
            setDatalen(false)
        }
        else {
            setDatalen(true)
        }
    }

    const NotAvailable = () => (<p className="not-avail">No Products Available</p>)


    return (
        <Container id="container" data-aos="fade-up">
            <Row className="menu">
                <HandleChange />
                {Datalen ?
                    filteredData.map((item) => (
                        <Cards name={item.name} price={item.price} imag={item.image} details={item.details} available={item.available} />
                    )) : <NotAvailable />}
            </Row>
        </Container>
    )
}

function Cards(props) {
    const x = 999999999
    // console.log(x)

    return (
        <Col className="menu-col">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imag} />
                <div className={props.available ? null : "text-image"}>{props.available ? null : "Unavailable"}</div>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.details}
                    </Card.Text>
                </Card.Body>
                <hr />
                <p className="tex-main">
                    {props.price}
                </p>
                <Card.Footer className="btn-main">
                    <a href={"https://wa.me/91"+x+"?text=Is%20This%20Available%20Now??%0A%0AProduct:%20"+props.name} target="_blank" rel="noreferrer">
                        <Button variant="outline-dark">Inquire Now</Button>
                    </a>
                </Card.Footer>
            </Card >
        </Col>
    )
}

export default Home