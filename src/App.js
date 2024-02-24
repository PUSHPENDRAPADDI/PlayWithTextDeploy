import './App.css'
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from './Components/About'
import React, { useState } from 'react';
import Alert from "./Components/Alert";
import Regex from "./Components/Regex";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Files from "./Components/Files";
import { ImageToText } from './Components/ImageToText';
import Dashboard from './Components/Dashboard';
import { Dictionary } from './Components/Dictionary';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <Router>
      <div className="container my-3">
        <Navbar title="Play With Text" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<Dashboard heading="Welcom to our portal here we provide services" mode={mode} showAlert={showAlert} />} />
          <Route path='/textForm' element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />} />
          <Route path='/regex' element={<Regex heading="Here You get Regex" mode={mode} showAlert={showAlert} />} />
          <Route path='/fileManage' element={<Files heading="Here you get all type of dummy Files" mode={mode} toggleMode={toggleMode} />} />
          <Route path='/imageToText' element={<ImageToText heading="Here you can extract text from Image" mode={mode} showAlert={showAlert} />} />
          <Route path='/dictionary' element={<Dictionary heading="Here is your dictionary" mode={mode} showAlert={showAlert} />} />
          <Route path='/about' element={<About mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;