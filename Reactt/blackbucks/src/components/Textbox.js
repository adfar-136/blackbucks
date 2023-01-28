import React, { useState } from "react";

export default function Textbox() {
    const [text,setText] = useState("")
    const onchange = (e)=>{
      setText(e.target.value)
   }
    const onupper=()=>{
      // setText('upper button is clicked')
      let upper = text.toUpperCase()
      setText(upper)
    }
    const onlower=()=>{
      // setText("Lower button is clicked")
      let lower = text.toLowerCase()
      setText(lower)
    }
    
    const onclear =()=>{
      setText("")
    }
    const oncopy=()=>{
      var t = document.getElementById("box")
      console.log(t)
      t.select()
      navigator.clipboard.writeText(t.value)
    }
  return (
    <div className="container my-3">
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          TextBox Apllication
        </label>
        <textarea className="form-control" id="box" 
        rows="9" value={text} onChange={(e)=>{onchange(e)}}
        ></textarea>
      </div>
      <div className="container">
        <button onClick={onupper} type="button" class="btn btn-primary">Uppercase</button>
        <button onClick={onlower} type="button" class="btn btn-secondary">Lowercase</button>
        <button onClick={onclear} type="button" class="btn btn-success">Clear</button>
        <button onClick={oncopy} type="button" class="btn btn-danger">Copy</button>
      </div>
    </div>
  );
}
