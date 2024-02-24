import React, { useRef } from 'react';
import Tesseract from 'tesseract.js';
import { BsEraser } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";

export const ImageToText = (props) => {
    const inputRef = useRef(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [text, setText] = React.useState('');
    const [progress, setProgress] = React.useState(0);
    function extractTextFromImage(imageFile) {
        Tesseract.recognize(
            imageFile,
            'eng',
            {
                logger: (m) => {
                    if (m.status === 'recognizing text') {
                        setProgress(parseInt(m.progress * 100))
                    }
                }
            }
        ).then(({ data: { text } }) => {
            setText(text.replace('\n', " "))
            setIsLoading(false)
        }).catch((error) => {
            console.error('Error extracting text:', error);
        });
    }
    const handleDivClick = () => {
        inputRef.current.click();
    };
    const handleDivDragOver = (event) => {
        event.preventDefault();
    };
    const handleDivDrop = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const imageFile = event.dataTransfer.files[0];
        if (imageFile) {
            extractTextFromImage(imageFile);
        }
    };
    const handleImageUpload = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const imageFile = event.target.files[0];
        if (imageFile) {
            extractTextFromImage(imageFile);
        }
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        if (text === "") {
            props.showAlert("Please enter some text", "warning")
        } else {
            props.showAlert("Text copied", "success")
        }
    }
    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>{props.heading}</h1>
                <div>
                    <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={() => setText('')} ><BsEraser /></button>
                    <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleCopyClick} ><FaCopy /></button>
                </div>
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                    id="myBox"
                    rows="9"
                ></textarea>
            </div>
            {isLoading && (
                <>
                    <progress className="form-control" value={progress} max="100">
                        {progress}%{' '}
                    </progress>{' '}
                    <p className="text-center py-0 my-0">Converting:- {progress} %</p>
                </>
            )}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                    className="card border border-primary border-dotted"
                    style={{
                        width: "45rem",
                        height: '15rem',
                        color: props.mode === 'dark' ? 'white' : '#042743',
                        backgroundColor: props.mode === 'dark' ? '#93b8f5' : 'white'
                    }}
                    onClick={handleDivClick}
                    onDragOver={handleDivDragOver}
                    onDrop={handleDivDrop}
                >
                    <div className="card-body d-flex align-items-center mx-auto">
                        <h3> Click Or Drag and drop here yor image</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            ref={inputRef}
                            style={{ display: 'none' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
