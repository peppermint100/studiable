import React from 'react'
import LogoImg from "./../../../assets/logo.png";


const Logo = () => {
    const logoStyle: React.CSSProperties = {
       width:"200px",
    }
    return (
        <img style={logoStyle} src={LogoImg} alt="logo" />
    )
}

export default Logo;
