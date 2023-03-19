import react, {useEffect, useState} from 'react';
import questions from '../../assets/question.json'
import Contents from "../contents/contents";
import Rankingg from "../rankcomponent/rankcomponent";
import {Button, Modal} from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

const Question = (props) => {
    let [answerSelect, setAnswerSelect] = useState();
    let [question, setQuestion] = useState(0);
    let [gameEnd, setGameEnd] = useState();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const restartGame = () => {
        props.onData("Data use restartgame");
    };
    const playSound = () => {
        const sound = new Audio('././sound/intro.mp3');
        sound.play();
    };
    // let [questions, setQuestions] = useState([]);
    //
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('http://localhost:5000/api/category/6415c6459e6209d7eaf33ae6');
    //         const data = await response.json();
    //         setQuestions(data.data.question);
    //         console.log(questions)
    //     }
    //     fetchData();
    // }, []);
    const handleSelect = (data) => {
        if (data === questions[question].correct) {
            setAnswerSelect(data);
            setTimeout(() => {
                setAnswerSelect(0)
                setQuestion(question + 1);
                const randomNumHelperFunc = num => Math.floor(Math.random() * num);
            }, 2000)
        } else {
            setGameEnd(true);
            setShowModal(true);
            setQuestion(0)
        }
    }
    return (
        <>
            <center>
                <div style={{width:1110, height:200,background:'lemonchiffon',marginTop: 150}}>
                        <div style={{ color: "white",height:50, background :'blueviolet'}}>
                            {questions[question].question}
                        </div>
                    <Contents question={questions[question]} answerSelect={answerSelect} handleSelect={(data) => handleSelect(data)}/>
                    {/*<Rankingg />*/}
                </div>
                <div style={{ color: "white" }}>
                    {questions[question].question}
                </div>
                <Contents question={questions[question]} answerSelect={answerSelect} handleSelect={(data) => handleSelect(data)} />
                <Rankingg />
                <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
                    <Modal.Header closeButton={false}>
                        <Modal.Title>Đán Án Sai</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Bạn đã thua rồi!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={restartGame}>
                            Chơi Lại
                        </Button>
                        <Button variant="secondary" onClick={handleGoHome}>
                            Chọn Bộ Câu Hỏi khác
                        </Button>
                    </Modal.Footer>
                </Modal>
            </center>
        </>
    )
}
export default Question;