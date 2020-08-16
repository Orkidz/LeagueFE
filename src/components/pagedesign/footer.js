import React from 'react';


function Footer() {
    return (
     <div className="footer" style={footerStyle}>
         <div>
            <ul>
                <li><a style={{padding: '28px'}} href="#home">ABOUT</a></li>
                <li><a style={{padding: '28px'}} href="#news">CONTACT</a></li>
                <li><a style={{padding: '28px'}} href="#contact">NEWS</a></li>
                <li><a style={{padding: '28px'}} href="#about">HOME</a></li>
            </ul>
        </div>
    </div>
    )
}

const footerStyle = {
    display: 'flex',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '80px',
    backgroundColor: 'black',
    color: '#fff',
    borderStyle: 'solid',
    borderColor: '#00BFFF',
    justifyContent: 'center',
}


export default Footer;