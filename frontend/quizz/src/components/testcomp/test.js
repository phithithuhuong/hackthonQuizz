import React, { useState, useEffect } from 'react';
import questions from '../../assets/question.json'

function MyComponent() {
    const [jsonData, setJsonData] = useState([]);
    const [status, setStatus] = useState(false)
    const playSound = () => {
        const sound = new Audio('././sound/intro.mp3');
        sound.play();
    };
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5000/api/category/6415c6459e6209d7eaf33ae6');
            const data = await response.json();
            setJsonData(data.data.question);
            setStatus(true)
            console.log(jsonData)
        }
        fetchData();
    }, [jsonData]);

    return (
        <div>
            <ul>
                <li>
                    <div>{status?jsonData[0].question:''}</div>
                </li>
                {/*{jsonData.map(item => (*/}
                {/*    <li key={item.id}>{item.question}</li>*/}
                {/*))}*/}
            </ul>
            <button onClick={playSound}>Click Me!</button>
        </div>
    );
}
export default MyComponent