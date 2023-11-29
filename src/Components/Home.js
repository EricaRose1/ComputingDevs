import React, { useState } from 'react';
import '../Styles/Home.css';
import background from '../Styles/photos/design1127.png';


function Home() {
    const [showBox, setShowBox] = useState(false);

    const handleClick = () => {
        setShowBox(!showBox);
    }

    return (
        <>
        <div id='homepage'>
            <div className='intro'>
                <img className='background' src={background}/>
                <h1 className='title'>Erica Litzenberger</h1>
                <p className='catchphrase'>Aspiring Web Developer Crafting Digital Experiences.</p>
                <button className='button' onClick={ handleClick }>Click me</button>
                {showBox && <p className='aboutme'>My name is Erica and I`m an aspiring web developer. I`m fascinated by the ever-evolving nature of the tech world 
                and the endless opportunities to learn new skills and create innovative solutions. I`m particularly drawn to frontend development,
                where I can express my creativity and connect with other like-minded people. I`m looking for a position that will allow me to enter 
                the tech industry and apply my knowledge of web development. I have a solid foundation in HTML, CSS, JavaScript, and various frameworks
                such as React.js and Node. I also have some experience with APIs and how to integrate them into my projects.</p>}    
            </div>
            
        </div>
        
        </>
    )
}

export default Home;