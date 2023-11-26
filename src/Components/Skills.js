import React from 'react';

import '../Styles/Skills.css';

function Skills() {
    return (
        <>
            <ul className='skillsList'>
                <li className='skill'>
                    <img id='icon' src='https://cdn.icon-icons.com/icons2/1/PNG/256/social_html5_html_31.png'/> HTML
                </li>
                <li className='skill'>
                    <img id='icon' src='https://cdn.icon-icons.com/icons2/512/PNG/512/css3-01_icon-icons.com_50918.png'/> CSS
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
                    <img id='icon' src='https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_python_icon_157826.png'/>Python
                </li>
                <li className='skill'>
                    <img id='icon' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/> GitHub
                </li>
            </ul>
        </>
    )
}

export default Skills;