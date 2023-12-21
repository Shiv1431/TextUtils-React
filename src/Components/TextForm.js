import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpperClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success");
    };
    const handleLowerClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!","success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleClearClick = () => {
      setText('');
      props.showAlert("Text Cleared!","success");
  };
  const handleCopyClick = () => {
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!","success");
};

const handleExtraSpace = () => {
  setText(text.split(/[ ]+/).join(' '));
  props.showAlert("Extra Space Removed!","success");
};
    const countWords = (text) => {
      const wordsArray = text.split(/\s+/).filter((word) => word !== "");
      return wordsArray.length;
    };

    const [text, setText]= useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra space</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summery</h2>
      <p>{countWords(text)} words and {text.length} characters</p>
      <p>{0.008 * countWords(text)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in text box above to preview it here"}</p>
    </div>

    </>
  );
}
