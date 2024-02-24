import React, { useEffect, useState } from 'react'

export const Dictionary = (props) => {
    const [text, setText] = useState('')
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [meaning, setMeaning] = useState('')
    const [audioPath, setAudioPath] = useState('')
    const [partOfSpeech, setPartOfSpeech] = useState('')
    const [example, setExample] = useState('')
    const [source, setSource] = useState([])
    const [synonyms, setSynonyms] = useState([])
    const [antonyms, setAntonyms] = useState([])
    useEffect(() => {
        if (data !== undefined && data !== null && Object.keys(data).length > 0) {
            setMeaning(data?.meanings[0]?.definitions[0].definition)
            setPartOfSpeech(data?.meanings[0]?.partOfSpeech)
            setAudioPath(data?.phonetics[0]?.audio)
            setExample(data?.meanings[0]?.definitions[0]?.example)
            setSource(data?.sourceUrls)
            setSynonyms(data?.meanings[0]?.antonyms)
            setAntonyms(data?.meanings[0]?.synonyms)
        }
    }, [data])

    const handleReset = () => {
        setText('')
        setMeaning('')
        setPartOfSpeech('')
        setAudioPath('')
        setExample('')
        setSource([])
        setSynonyms([])
        setAntonyms([])
    }

    const handleSerch = async () => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
            if (!response.ok) {
                setError('Error Occured')
                handleReset()
                props.showAlert("Somthing Went wrong", "warning")
            }
            const responseData = await response.json();
            setData(responseData[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                    id="myBox"
                    rows="4"
                ></textarea>
            </div>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleSerch}>Search </button>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleReset}>Reset </button>
            <div>
                {audioPath !== undefined && audioPath.length > 0 && <audio controls>
                    <source src={audioPath} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>}
                {meaning !== undefined && meaning.length > 0 && <><h3>Meaning : </h3><p>{meaning}</p></>}
                {partOfSpeech !== undefined && partOfSpeech.length > 0 && <><h3>PartOfSpeech : </h3><p>{partOfSpeech}</p></>}
                {example !== undefined && example.length > 0 && <><h3>Example : </h3><p>{example}</p></>}
                {source !== undefined && source.length > 0 && <> <a target='blank' href={source}>Click for More Info</a></>}
                {synonyms !== undefined && synonyms.length > 0 && <><h3>Synonyms : </h3><p>{synonyms.join(', ')}</p></>}
                {antonyms !== undefined && antonyms.length > 0 && <><h3>Antonyms : </h3><p>{antonyms.join(', ')}</p></>}
            </div >
        </div>
    )
}