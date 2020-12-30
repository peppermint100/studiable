import React from 'react'
import SearchBarInput from '../Input/SearchBarInput';
import jumboBgImage from "./../../assets/main.svg";
import jumboTextImage from "./../../assets/mainText.svg";

const Jumbotron = () => {
    return (
        <div className="relative mt-5">
                <img className="z-0" src={jumboBgImage} alt="jumbo-img" draggable="false" />
                <div className="absolute top-1/2 left-1/2 h-96 flex flex-col justify-around" style={{ transform: "translate(-50%, -50%)"}}>
                    <img src={jumboTextImage} alt="jumbo-text" draggable="false"/>
                    <SearchBarInput />
                </div>
        </div>
    )
}

export default Jumbotron
