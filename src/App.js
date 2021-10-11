import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('lite');
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  let toggleMode = () => {
    if(mode === 'lite') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = ('TextUtils - Dark Mode');
    } else {
      setMode('lite');
      document.body.style.backgroundColor = '#fff';
      showAlert('Lite Mode has been enabled', 'success');
      document.title = ('TextUtils - Lite Mode');
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText = "About Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textform heading = "Enter the text to analyze:" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
        
        {/* <About mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
