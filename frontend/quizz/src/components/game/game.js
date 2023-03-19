import react, { useState } from 'react';
import Question from '../question/Question.js';
import Rankingg from '../rankcomponent/rankcomponent.js';
import Timer from '../timer/timer';

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
                <button
                    onClick={handleGame}
                    style={{ top: '10%', position: 'fixed' }}
                >{game ? 'STOP' : 'START'}</button>
                <Rankingg />
                <Timer key={game} handleSecond={(data) => handleSecond(data)} timerStart={game} onData={dataRestartGame}/>
                <Question
                    gameStatus={game} onData={dataRestartGame}
                />
            </>
        )
    } else {
        return (
            <>
                <button
                    onClick={handleGame}
                    style={{ top: '10%', position: 'fixed' }}
                >{game ? 'STOP' : 'START'}</button>
                <Rankingg />
                <Timer timerStart={game}/>
            </>
        )
    }

}

export default Game;
