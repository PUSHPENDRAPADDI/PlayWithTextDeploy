import React, { useEffect, useState } from 'react';
const regexMasterData = [
    {
        id: 0,
        regexName: 'Select Pattern',
        regex: 'Here you got Regex',
        Explaination: 'Here you get explaination for regex pattern'
    },
    {
        id: 1,
        regexName: 'email',
        regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
        Explaination: 'This is for validation of E-mail pattern like {abc121@xyz.com}'
    },
    {
        id: 2,
        regexName: 'URL',
        regex: '^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$',
        Explaination: 'This is for validation of URL pattern like {https://chat.openai.com}'

    },
    {
        id: 3,
        regexName: 'Date',
        regex: '^\d{4}-\d{2}-\d{2}$',
        Explaination: 'This is for validation of Date in pattern like {YYYY-MM-DD}'

    },
    {
        id: 4,
        regexName: 'Username',
        regex: '^[a-zA-Z0-9._-]+$',
        Explaination: 'This is for validation of Username (Alphanumeric with underscores, hyphens, or periods)'
    },
    {
        id: 5,
        regexName: 'Time',
        regex: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$',
        Explaination: 'This is for validation of Time (HH:MM 24-hour format)'
    },
    {
        id: 6,
        regexName: 'IPv4 Address',
        regex: '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
        Explaination: 'This is for validation of IPv4 Address'
    },
    {
        id: 7,
        regexName: 'IPv6 Address',
        regex: '^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:$|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^[0-9a-fA-F]{1,4}::([0-9a-fA-F]{1,4}:){0,4}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}:([0-9a-fA-F]{1,4}:){0,3}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,4}:([0-9a-fA-F]{1,4}:){0,4}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,3}:([0-9a-fA-F]{1,4}:){0,5}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,2}:([0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^[0-9a-fA-F]{1,4}::([0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^:((:[0-9a-fA-F]{1,4}){1,7}|:)$',
        Explaination: 'This is for validation of IPv6 Address'
    },
    {
        id: 8,
        regexName: 'Credit Card Number',
        regex: '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])?[0-9]{11})$',
        Explaination: 'This is for validation of Credit Card Number (Visa, MasterCard, American Express, Discover)'
    },
    {
        id: 9,
        regexName: 'HTML Tags',
        regex: `<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*>.*?<\\/\\1>|<.*? \\/>`,
        Explaination: 'This is for validation of HTML Tags'
    },
    {
        id: 10,
        regexName: 'ZIP Code (U.S.)',
        regex: '^\d{5}(?:[-\s]\d{4})?$',
        Explaination: 'This is for validation of ZIP Code (U.S.)'
    },
    {
        id: 11,
        regexName: 'Phone number',
        regex: '/^(?:[\+0-9]?)[0-9]{6,14}$/',
        Explaination: 'This is for validation of Phone number like {+91{6 - 14 digits are allowed}}'
    },
    {
        id: 12,
        regexName: 'Pin code',
        regex: '/^\d{6}$/',
        Explaination: 'This is for validation of pin code'
    },
]

export default function Regex(props) {

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied", "success")
    }
    const [text, setText] = useState('')
    const [explaination, setExplaination] = useState('')
    useEffect(() => {
        text.length && setExplaination(regexMasterData.filter(obj => obj.regex === text)[0].Explaination)
    }, [text])
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', marginBottom: "10px" }}
                        id="myBox"
                        rows="3"
                    ></textarea>
                    <select onChange={(e) => setText(e.target.value)} className="form-control enable-button-pointers" value={text}
                        style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} rows="3"
                        name="regexType" id="regexType">
                        {regexMasterData.map(item => (
                            <option key={item.id} value={item.regex}>{item.regexName}</option>
                        ))}
                    </select>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2 enable-button-pointers'
                    onClick={handleCopyClick}>Copy Regex</button>
                <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2 enable-button-pointers'
                    onClick={() => [setText(''), setExplaination('')]}>Reset</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Explaination</h1>
                <p>{explaination}</p>
            </div>
        </>
    )
}