import React from 'react';
import '../Styles/Home.css';
import background from '../Styles/photos/design1127.png';


function Home() {
    return (
        <div id='homepage'>
            <div className='intro'>
                <img className='background' src={background}/>
                <h1 className='title'>Erica Litzenberger - Web Developer</h1>
                <p className='catchphrase'>Passionate Web Developer Crafting Digital Experiences.</p>
            
            </div>
        </div>
    )
}

export default Home;