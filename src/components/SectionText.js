import React from 'react';
import './SectionText.css';
// import TitleImage from 'assets/images/icons/snowflake0.svg'; <== This cannot resolve: WHY?

const SectionText = (props) => {
    const text = props.text.map(paragraph => {
        // console.log('section text language: ', props.language);
        return (
        <div key={paragraph.id} className='sectionParagraph'>
            {props.language === 'en' ? <p>{paragraph.text}</p> : <p>{paragraph.textJ}</p> }
        </div>
        )
    });

    return (
        <div className='sectionText'>
            {text}
        </div>
    )
}

export default SectionText;