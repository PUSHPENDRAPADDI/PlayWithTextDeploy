import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    const cardDetails = [
        {
            id: 1,
            title: "Play with Text",
            path:'textForm',
            description: 'From basic formatting to advanced transformations, unlock the power of manipulating text efficiently for various applications and industries.'
        },
        {
            id: 2,
            title: "Regex",
            path:'regex',
            description: 'A Comprehensive Guide for Matching Multiple Patterns Efficiently. Learn how to leverage regex to find and manipulate various data types effortlessly. Dive into regex mastery today!'
        },
        {
            id: 3,
            title: "All Files Available",
            path:'fileManage',
            description: 'Looking to bulk up your dummy file collection? Explore our curated selection of dummy files available for download, perfect for testing, placeholders, and more. Streamline your projects with ease!'
        },
        {
            id: 4,
            title: "Text from Image",
            path:'imageToText',
            description: 'Unlocking the Power of Visual Data: Learn How to Extract Text from Images with Ease. Discover the Tools and Techniques Needed to Convert Images into Editable Text effortlessly.'
        },
        {
            id: 5,
            title: "Dictionary",
            path:'dictionary',
            description: `Dive into the intricate world of words with our exploration of the 'Dictionary'—unveiling the origins, evolution, and importance of this essential linguistic tool in just 30 words!`
        },
    ]
    return (
        <div className='row'>
            {cardDetails.map(item => (
                <div key={item.id} className={`card  m-3 text-center ${props.mode === 'dark'? 'text-white bg-dark card-hover-dark' : 'card-hover'}`} style={{ maxWidth: '18rem' }}>
                    <Link className={`${props.mode === 'dark' ? 'text-light' : 'text-dark'} text-decoration-none font-weight-normal`} to={`/${item.path}`} >
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div >
    )
}

export default Dashboard