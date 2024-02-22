import React, { useEffect, useState } from 'react';
import { TbLetterCaseUpper } from "react-icons/tb";
import { RxLetterCaseLowercase } from "react-icons/rx";
import { BsEraser } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import { MdOutlineSpaceBar } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success")
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", "success")
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success")
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
    }
    const handleTextReverse = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text reversed", "success")
    }
    const handleWordReverse = () => {
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
        props.showAlert("Words reversed in text", "success")
    }
    const handleUpperCaseFirst = () => {
        const text2 = text + " ";
        const arr = text2.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const newText = arr.join(" ");
        setText(newText);
        props.showAlert("Converted to Capitalize", "success")
    }
    const handleRemoveComma = () => {
        const newText = text.split(",").join("");
        setText(newText);
        props.showAlert("Commas are removed", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    const [duplicateText, setDuplicateText] = useState([])

    useEffect(() => {
        const words = text.split(/\s+/);
        const wordSet = new Set();
        const duplicates = new Set();
        words.forEach(word => {
            if (wordSet.has(word)) {
                duplicates.add(word);
            } else {
                wordSet.add(word);
            }
        });
        setDuplicateText(Array.from(duplicates));
    }, [text])
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="9"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleUpClick}><TbLetterCaseUpper /></button>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleDownClick}><RxLetterCaseLowercase /></button>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleClearClick}><BsEraser /></button>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleCopyClick}><FaCopy /></button>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleExtraSpaces}><MdDeleteForever /> Extra <MdOutlineSpaceBar /></button>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleTextReverse}><TfiReload /> Text</button>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleWordReverse}><TfiReload /> Word in Text</button>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleUpperCaseFirst}><RxLetterCaseCapitalize /></button>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleRemoveComma}><MdDeleteForever /> Comma </button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charecters</p>
                <h2>Time Require to read</h2>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in above Box"}</p>
                <h2>Vowels</h2>
                <p>{(text.match(/[aeiou]/gi) || []).length}</p>
                <h2>Consonent</h2>
                <p>{text.length - (((text.match(/[aeiou]/gi) || []).length) + text.split(" ").length - 1)}</p>
                <h2>Email Extractor</h2>
                <p>{((text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) || []).length)}</p>
                <h2>Numbers </h2>
                <p>{(text.match(/[0-9]/gi) || []).length}</p>
                {duplicateText.length > 0 && <>
                    <h2>Duplicate words </h2>
                    <p>{duplicateText.join(',')}</p>
                </>}
            </div >
        </>
    )
}