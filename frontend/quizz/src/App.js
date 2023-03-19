import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowAll from "./components/show/show-all";
import Frame from "./components/frame-component/frame";
import Home from "./components/home/home";
import Login from "./components/info/login";
import Register from "./components/info/register";
import Form from "./components/show/form";
import Start from "./components/timer/start";
import GameShow from "./components/show/game-show";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Frame/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/form" element={<Form/>} />
                {/*<Route path="/start" element={<Start/>} />*/}
                <Route path="/play" element={<GameShow/>} />
            </Routes>
        </div>
    )
}

export default App;
