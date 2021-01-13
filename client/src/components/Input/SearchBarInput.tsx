import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBarInput = () => {
    return (
    <div className="relative">
        <button className="absolute w-10 h-10 top-1/2 right-1 text-center" style={{transform:"translate(0%, -50%)"}}>
            <FontAwesomeIcon icon={faSearch} color="#925C33"/>
        </button>
        <input className="bg-white w-full h-12 border-solid rounded border-primary" /> 
    </div>
    )
}

export default SearchBarInput
