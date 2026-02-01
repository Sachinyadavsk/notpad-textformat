import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import HOME from './components/Home';
import ABOUT from './components/About';
import BLOG from './components/Blog';
import CONTACT from './components/Contact';
import LOGIN from './components/Login';
import REGISTER from './components/Register';
import SERVICE from './components/Service';
import TESTMONIAL from './components/Testmonial';
import TESTFORM from './components/Textform';
import ALERT from './components/Alert';


function App() {
   const [mode, setMode] = useState('light'); // whether dark mode is enable or not

   const [alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{

  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);
   }

const  toggleMode =()=>{
  if (mode==='light') {
    setMode('dark');
    document.body.style.backgroundColor = 'white';
    showAlert("dark mode has been enable","success");
    document.title = 'textapp-Dark Mode';
    // setInterval(() => {
    //   document.title = 'textapp-new app';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'textapp-download now';
    // }, 1500);
    
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'light';
    showAlert("light mode has been enable","success");
    document.title = 'textapp-light Mode';

  }
}


  return (
    <Router>
   <Navbar title="apptext" mode={mode}  toggleMode={toggleMode} /> 
   <ALERT alert={alert}/>
   <Switch>
         <Route exact path="/"><HOME mode={mode} /></Route>
          <Route path="/About"><ABOUT mode={mode} /></Route>
          <Route path="/Service"><SERVICE mode={mode} /></Route>
          <Route path="/Blog"><BLOG mode={mode} /></Route>
          <Route path="/Testmonial"><TESTMONIAL mode={mode} /></Route>
          <Route path="/Textform"><TESTFORM mode={mode} showAlert={showAlert} heading="enter the text to analyze below" /></Route>
          <Route path="/Contact"><CONTACT mode={mode} /></Route>
          <Route path="/Login"><LOGIN mode={mode} /></Route>
          <Route path="/Register"><REGISTER mode={mode} /></Route>
          
          
      </Switch>
    </Router>
  );
}

export default App;
