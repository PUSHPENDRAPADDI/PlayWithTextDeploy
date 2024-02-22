import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36, 74, 104)':'white',
    }
    return (
        <div classNameName="container" style={{color: props.mode === 'dark'?'white':'042743'}}>
            <h2>About us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h2>Analyze Your Text</h2>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <h2>This is the text playwithtext place.</h2> A text playwithtext is a simple tool for automatically analyzing texts. There are different types of text analysis techniques, from sentiment analysis to topic classification, which allow you to gain detailed insights from your text data.<code>.PLAYWITHTEXTS</code> content analysis, interaction analysis, and performance studies.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={myStyle} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h2>Free to use</h2>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <h2>This is totaly free website for you.</h2>Here youjust provide your text and this website help you to analyze your text
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h2>Browser Compatible</h2>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <h2>This website is browser compatible.</h2> Its can be accesible from laptop, phone, table etc means it is totaly responsive. And open in any browser like Chrome, Firefox, Safari etc,
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}