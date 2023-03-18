import react, { useState } from 'react';
import questions from '../../assets/question.json'
import Contents from "../contents/contents";
import Rankingg from "../rankcomponent/rankcomponent";
const Question = (props) => {
    let [answerSelect, setAnswerSelect] = useState();
    let [question, setQuestion] = useState(0);
    let [gameEnd, setGameEnd] = useState();
    const handleSelect = (data) => {
        if (data === questions[question].correct) {
            setAnswerSelect(data);
            setTimeout(() => {
                setAnswerSelect(0)
                setQuestion(question + 1);
                const randomNumHelperFunc = num => Math.floor(Math.random() * num);
            }, 2000)
        } else {
            setGameEnd(true,
            alert('sai, cmnr'));
            setQuestion(0)
        }
    }
    return (
        <>
            <div style={{ color: "white" }}>
                {questions[question].question}
            </div>
            <Contents question={questions[question]} answerSelect={answerSelect} handleSelect={(data) => handleSelect(data)} />
            <Rankingg />
        </>
    )
}
export default Question;