import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowAll from "./components/show/show-all";
import Frame from "./components/frame-component/frame";
import Home from "./components/home/home";
import MyComponent from "./components/testcomp/test";
function App() {
    return (
        <div>
            {/*<Routes>*/}
            {/*    <Route path="/home" element={<Home />} />*/}
            {/*    <Route path="/game" element={<Frame/>} />*/}
            {/*</Routes>*/}
            <MyComponent/>

        </div>
    )
}

export default App;
