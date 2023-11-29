import React from 'react';
import '../Styles/Contact.css';

function Contact() {

    return (
        <>
            <h1 id='contactTitle'>Contact Me</h1>
            <div id='container'>
                <ul id='contactlist'>
                    <label id='icon'><img src='https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Phone-Call-Telephone-512.png'/></label>
                    <li>(941)-769-3323</li>
                    <label id='icon'></label>
                    <li className='emailbtn'><a href='mailto:Erica.L1@outlook.com'><img src='https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png'/></a></li>
                    <label id='icon'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></label>
                    <li><a href='https://github.com/EricaRose1'>Github</a></li>
                    <li><a href='www.linkedin.com/in/erica-webdev'><img src='https://cdn-icons-png.flaticon.com/512/61/61109.png'/>Linkedin</a></li>
                </ul>
                
            </div>
            
        </>       

    )
}

export default Contact;