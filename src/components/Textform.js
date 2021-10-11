import React, {useState} from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    if(text.length > 0) props.showAlert('Converted to Upper Case', 'success');
    document.title = ('TextUtils - UpperCase');
  }

  const handleLoClick = () => {
    setText(text.toLowerCase());
    if(text.length > 0) props.showAlert('Converted to Lower Case', 'success');
  }

  const handleOnChange = (e) => { setText(e.target.value); }
  const clearClick = (e) => {
    setText('');
    props.showAlert('Cleared the textarea', 'success');
  }

  const handleTitleCaseClick = (e) => {
    let stringArr = text.split(' ');
    let newStrArr = [];

    stringArr.forEach(element => {
      let firstChar = element.charAt(0).toUpperCase();
      let captailizeWord = firstChar + element.slice(1).toLowerCase();
      newStrArr.push(captailizeWord);
    });
    setText(newStrArr.join(' '));
    if(text.length > 0) props.showAlert('Converted to Title Case', 'success'); 
  }

  const handleSentenceCaseClick = () => {
    let firstChar = text.charAt(0).toUpperCase();
    let sentenceCaseString = firstChar + text.slice(1).toLowerCase();
    setText(sentenceCaseString);
    if(text.length > 0) props.showAlert('Converted to Sentence Case', 'success'); 
  }

  const handleCopyTextClick = () => {
    navigator.clipboard.writeText(text);
    text.length > 0 ? props.showAlert('Copied to Clipboard', 'success') : props.showAlert('Please input values to copy it', 'warning');
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join( ));
    props.showAlert('Extra Spaces Removed', 'success')
  }

  const [text, setText] = useState('');
  // test = "Test"; // Wrong way to change the state
  // setText = "Test"; // Correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey'}}></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick = {handleUpClick}>Upper Case</button>
        <button className="btn btn-outline-success mx-2" onClick = {handleLoClick}>Lower Case</button>
        <button className="btn btn-outline-success mx-2" onClick = {handleTitleCaseClick}>Title Case</button>
        <button className="btn btn-outline-success mx-2" onClick = {handleSentenceCaseClick}>Sentence Case</button>
        <button className="btn btn-outline-success mx-2" onClick = {handleCopyTextClick}>Copy Text</button>
        <button className="btn btn-outline-success mx-2" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-outline-danger mx-2" onClick = {clearClick}>Clear</button>
      </div>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className="my-3">Your Text Summery</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes reading time</p>
        <h3>Preview</h3>
        {/* <p>{text.split(/\s+/).slice(0, 10).join(" ")}</p> */}
        <p>{text.length > 0 ? text : "Enter Something to Preview it here"}</p>
      </div>
    </>
  )
}
