import React, { useState } from 'react';

const QuestionsItem = ({ el }) => {
    const [openTitle, setOpenTitle] = useState(false);

    const handleClick = () => {
        setOpenTitle(!openTitle);
    }

    return (
        <div className='QuestionsItem'>
            <div className="header" onClick={handleClick}>
                <h2>{el.title}</h2>
                {openTitle ? <img src='./assets/icons/minus.svg' /> : <img src='./assets/icons/plus.svg' />}
            </div>
            <p className={openTitle ? 'open' : 'close'}>{el.text}</p>
        </div>
    )
}

export default QuestionsItem;
