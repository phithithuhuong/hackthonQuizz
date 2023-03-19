import {Card, Col, Container, Row} from "react-bootstrap";
import Navbars from "../menu/navbar";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Footer from "../menu/footer";
function Start() {
    return (
        <>
            <Container>
                <Navbars />
                <Row style={{marginTop: 50}}>
                    <Col md={12}>
                        <div style={{background:'lemonchiffon'}}>
                            <Row style={{marginTop: 50}}>
                                <Col md={4}>
                                    <h4 style={{color:'blueviolet'}}>
                                        Hack não
                                    </h4>
                                   <p> <small>Thể loại câu đố này sẽ thách thức bạn , và khi bạn vượt qua thì bạn sẽ ở ngưỡng  thông minh lắm nhá! Chúc mừng bạn vượt qua </small></p>
                                </Col>
                                <Col md={8} style={{background:'blueviolet'}} >
                                    <div style={ {margin: 50 }}>
                                        <center>
                                             <Link to={'/play'}>   <Button variant="warning" style={{height:50}} >   Bắt đầu chơi  </Button></Link>
                                        </center>
                                    </div>


                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 50}}>
                    <Col md={12}>
                    </Col>

                </Row>
                <Footer/>
            </Container>
        </>
    )
}

export default Start;
