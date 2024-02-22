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
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <Router>
      <div className="container my-3">
        <Navbar title="TextsUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />} />
          <Route path='/regex' element={<Regex heading="Here You get Regex" mode={mode} showAlert={showAlert} />} />
          <Route path='/fileManage' element={<Files heading="Here you get all type of dummy Files" mode={mode} toggleMode={toggleMode} />} />
          <Route path='/imageToText' element={<ImageToText heading="Here you can extract text from Image" mode={mode} showAlert={showAlert} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;