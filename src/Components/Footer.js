import React from "react";

import '../Styles/Footer.css';


function Footer() {
    return (
        <div className='footer'>
        <div id='footer-left'>
            <p className='footer-left'>Thank you for taking the time to review my website. If you have any questions or concerns, please feel free to reach out to me <b>941-769-3323</b></p>
        </div> 
        <div id='footer' className='footer-right'>
            {/* <a><img id='Ficon' src='https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Phone-Call-Telephone-512.png'/> </a> */}
            <a href='mailto:Erica.L1@outlook.com' target="_blank"><img id='Ficon' src='https://i0.wp.com/cssdp.org/uploads/2019/08/white-email-icon-png-26.png?fit=2400%2C2400&ssl=1'/></a>
            <a href='https://github.com/EricaRose1' target="_blank"><img id='Ficon' src='https://pngimg.com/d/github_PNG67.png'/></a>
            <a href='https://www.linkedin.com/in/erica-webdev' target="_blank"><img id='Ficon' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png'/></a>
        </div>
        </div>
         

    )
};

export default Footer;