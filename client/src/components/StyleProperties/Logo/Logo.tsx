import React from 'react'
import LogoImg from "./../../../assets/logo.svg";

const Logo = () => {
    const logoStyle: React.CSSProperties = {
       width:"200px",
       height: "186px"
    }
    return (
        <img style={logoStyle} src={LogoImg} alt="logo" />
    )
}

export default Logo;
