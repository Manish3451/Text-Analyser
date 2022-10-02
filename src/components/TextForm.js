import React,{useState} from 'react';

export default function TextForm(props) {

    // const handleExtraSpaces = () => {
    //     let newText = text.split(/[ ]+/);
    //     setText(newText.join(" "))
    // }


    // const handleCopy = () => {
    //     let text = document.getElementById("myBox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
        
    // }

    // const handlebClick = (e) =>{
    //     e.preventDefault();
    //     let newText = '';
    //     setText(newText);
    // }
     
    const handledownClick = (e) => {
        e.preventDefault();
        console.log("button-clicked")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    
    const handleUpClick = (e) => {
        e.preventDefault();
        console.log("button-clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    
    const handleOnChange = (event) => {
        
        console.log("on change")
        setText(event.target.value);
    }
    
    const [text, setText] = useState('Enter text here');
   
  return (
    <>
    <div className="container"   style={{color:props.mode=== 'dark'?'white': '#042743'}}>
        <form>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8" style={{backgroundcolour: props.mode==='dark'?'grey':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2"  onClick={handleUpClick} > Convert to UpperCase padding</button>
            <button className="btn btn-secondary" onClick={handledownClick} > Convert to LowerCase </button>
            {/* <button className = "btn btn-primary mx-2" onclick={handlebClick}>Clear-Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button> */}

        </form>
    </div>

    <div className="container my-2" style={{color:props.mode=== 'dark'?'white': 'black'}}  >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview"}</p>
    </div>
    </>
  )
}

