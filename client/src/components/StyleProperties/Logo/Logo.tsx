import React from 'react'
import LogoImg from "./../../../assets/logo.png";
import { useHistory } from "react-router-dom";


const Logo = () => {

    const history = useHistory();

    const logoStyle: React.CSSProperties = {
       width:"200px",
       cursor: "pointer"
    }

    return (
            <img onClick={() => {
                history.push("/");
            }} style={logoStyle} src={LogoImg} alt="logo" />
    )
}

export default Logo;
