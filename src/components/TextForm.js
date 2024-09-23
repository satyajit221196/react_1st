import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick= () =>{
        //console.log('UpperCase Clicked' + text);
            let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick= () =>{
        //console.log('UpperCase Clicked' + text);
            let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick= () =>{
            let newText = '';
        setText(newText);
    }
    const handleCopyClick= () =>{
        navigator.clipboard.writeText(text);
    }
    const handleRESpaceClick= () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        //let newText = text.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space and trim leading/trailing spaces
        //setText(newText); // Update the state with the modified text
    }
    const handleOnChange= (event) =>{
        //console.log('On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    //text="ant text"; //wrong way to change the state.
    //setText('Any Text'); //right way to change the state.
  return (
    <div>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backGround: props.mode==='light' ? 'dark': 'light'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 centred" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRESpaceClick}>Remove Extra Space</button>
        </div>
        <div className="container">
            <h4>Your Text Summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read this text.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}


