import React from 'react';

import '../Styles/Skills.css';

function Skills() {
    return (
        <>
            <ul className='skillsList'>
                <li className='skill'>
                    <img id='icon' src='https://cdn.iconscout.com/icon/free/png-256/free-html-58-225994.png'/> HTML
                </li>
                <li className='skill'>
                    <img id='icon' src='https://www.shareicon.net/data/512x512/2015/08/31/93779_css3_512x512.png'/> CSS
                </li>
                <li className='skill'>
                    <img id='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Font_Awesome_5_brands_node-js.svg/1200px-Font_Awesome_5_brands_node-js.svg.png'/> JavaScript
                </li>
                <li className='skill'>
                    <img id='icon' src='https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png'/> React
                </li>
                <li className='skill'>
                    <img id='icon' src='https://www.shareicon.net/data/2016/06/19/603784_nodejs_512x512.png'/> Node.js
                </li>
                <li className='skill'>
                    <img id='icon' src='https://cdn-icons-png.flaticon.com/512/4299/4299956.png'/> SQL
                </li>
                <li className='skill'>
                    <img id='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/1200px-Python_icon_%28black_and_white%29.svg.png'/>Python
                </li>
                <li className='skill'>
                    <img id='icon' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/> GitHub
                </li>
            </ul>
        </>
    )
}

export default Skills;