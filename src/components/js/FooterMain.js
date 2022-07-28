import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/FooterMain.css"

function FooterMain() {
    return (
        <Container fluid className='main-container'>
            <Row>
                <Col className='text-main'>
                    <h6>
                        <a href="https://twitter.com/10cyrilc" target="_blank" rel="noreferrer">© Cyril C Thomas</a>
                    </h6>
                    <p>
                        Shop<br />
                        Shop Address<br />
                        Pin Code<br />
                    </p>

                </Col>
            </Row>
        </Container>
    )
}

export default FooterMain