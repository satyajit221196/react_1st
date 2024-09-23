
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';



function App() {
    const [mode, setMode] = useState('dark'); //Wheather dark mode is enabled or not

    const [btnText, setBtnText] = useState('Enable Light Mood');

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#343a40';
        setBtnText('Enable Dark Mood');
      }else{
         setMode('light');
         document.body.style.backgroundColor = '#f8f9fa';
         setBtnText('Enable Light Mood');
      }
    }
  return (
    <>
    
    {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} btnText={btnText}/>
    <TextForm heading="Registration Form" mode={mode}/>
    <About />
    </>
    
  );
}

export default App;
