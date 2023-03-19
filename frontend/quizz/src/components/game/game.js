import react, { useState } from 'react';
import Question from '../question/Question.js';
import Rankingg from '../rankcomponent/rankcomponent.js';
import Timer from '../timer/timer';
import {Card, Col, Container, Row} from "react-bootstrap";
import Nav from "../menu/nav-play";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Footer from "../menu/footer";


const Game = () => {
    const [game, setGame] = useState(false);
    const playSound = () => {
        const sound = new Audio('././sound/intro.mp3');
        sound.play();
    };
    const handleGame = () => {
        setGame(!game);
        playSound();
    }
    const handleSecond = (data) => {
        console.log(data);
    };
    const dataRestartGame = (data) => {
        console.log(data);
        handleGame();
    };

    if (game) {
        return (
            <>
                <Container>
                    <Nav />
                    <button
                        onClick={handleGame}
                        style={{ top: '10%', position: 'fixed' }}
                    >{game ? 'STOP' : 'START'}</button>
                    <Row style={{marginTop: 50}}>
                        <Col md={12}>
                <Timer key={game} handleSecond={(data) => handleSecond(data)} timerStart={game} onData={dataRestartGame}/>
                <Question
                    gameStatus={game} onData={dataRestartGame}
                />
            </Col>
    </Row>
        <p style={{margin:15}}></p>
        < Footer/>
    </Container>
    </>
        )
    } else {
        return (
            <>
                <Button variant="warning"
                    onClick={handleGame}
                    style={{ top: '6%',left: '21%', position: 'fixed' }}
                >{game ? 'STOP' : 'START'}</Button>
                <Timer key={game} handleSecond={(data) => handleSecond(data)} timerStart={game} onData={dataRestartGame}/>
                <Question
                    gameStatus={game} onData={dataRestartGame}
                />
            </>
        )
    }

}

export default Game;
