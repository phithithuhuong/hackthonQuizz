import Register from "../info/register";
import Login from "../info/login";
import Sidebar from "../menu/sidebar";
import Navbars from "../menu/navbar";
import {Container, Row, Col} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Footer from "../menu/footer";
// import {Row, Container, Col} from "react-bootstrap";

function Home() {
    return (
        <>
            <Register/>
            {/*<Login/>*/}

            <Container>
                <Navbars/>
                <Row>
                    {/*<Col md={12}>*/}
                    {/*    <img src="https://sites.create-cdn.net/siteimages/1/4/3/14310/logos/807401.gif"/>*/}
                    {/*</Col>*/}

                </Row>
                <Row>
                    <Col md={12}>
                    </Col>

                </Row>
                <Row style={{margin:15}}>
                    <Col md={4} >
                        <Card style={{ width:'18rem', border:'5px solid blueviolet',background:'lemonchiffon'  }}>

                            <Card.Body>
                                <Card.Title>Hack não</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="warning">Bắt đầu</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} >
                        <Card style={{ width:'18rem', border:'5px solid blueviolet',background:'lemonchiffon'  }}>

                            <Card.Body>
                                <Card.Title>Đố ngu</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="warning">Bắt đầu</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} >
                        <Card style={{ width:'18rem' , border:'5px solid blueviolet',background:'lemonchiffon' }}>

                            <Card.Body>
                                <Card.Title>Toán học</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="warning">Bắt đầu</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{margin:15}}>
                    <Col md={4} >
                        <Card style={{ width:'18rem', border:'5px solid blueviolet',background:'lemonchiffon'  }}>

                            <Card.Body>
                                <Card.Title>Lịch sử</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="warning">Bắt đầu</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} >
                        <Card style={{ width:'18rem' , border:'5px solid blueviolet',background:'lemonchiffon' }}>

                            <Card.Body>
                                <Card.Title>Văn hóa</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="warning">Bắt đầu</Button>
                            </Card.Body>
                        </Card>
                    </Col><Col md={4} >
                    <Card  style={{ width:'18rem', border:'5px solid blueviolet',background:'lemonchiffon' }}>

                        <Card.Body>
                            <Card.Title>Chính trị</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="warning">Bắt đầu</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                <Footer/>
            </Container>
        </>
    );
}

export default Home;
