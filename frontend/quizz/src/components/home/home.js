import Register from "../info/register";
import Login from "../info/login";
import Navbars from "../menu/navbar";
import {Container, Row, Col} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Footer from "../menu/footer";
import {Link} from "react-router-dom";

// import {Row, Container, Col} from "react-bootstrap";

function Home() {
    return (
        <>
            {/*<Register/>*/}
            {/*<Login/>*/}

            <Container>
                <Navbars />
                <Row style={{marginTop: 50}}>
                    <Col md={12}>
                        <img style={{width:1115}} src="https://kenh14cdn.com/thumb_w/640/2016/cover-quizz-1458020660190.jpg"/>
                    </Col>
                </Row>
                <Row style={{marginTop: 50}}>
                    <h2 style={{color:'blueviolet',textAlign:'center'}}> Các thể loại vui lòng chọn để chơi </h2>
                </Row>
                <Row style={{marginTop: 50}}>
                    <Col md={12}>
                    </Col>
                </Row>
                <Row style={{margin:15,textAlign:'center'}}>
                    <Col md={4} >
                        <Card style={{ width:'18rem', border:'5px solid blueviolet',background:'lemonchiffon'  }}>

                            <Card.Body>
                                <Card.Title>Hack não</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="warning"> <Link to="/start">Bắt đầu</Link> </Button>
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
                <Row style={{margin:15,textAlign:'center'}}>
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
