import React from 'react'

interface Props {
    type?: string;
    placeholder?: string;
    width: string;
    height: string;
    name: string;
    onChange?: (e: React.ChangeEvent<any>) => void;
}

const DefaultInput:React.FC<Props> = ({ type, width, height, placeholder, name, onChange }) => {
    return (
        <input name={name} className={`w-${width} h-${height} border-solid border-2 border-gray-400 rounded focus:border-primary`}
            type={type} placeholder={placeholder} onChange={onChange} />
    )
}

export default DefaultInput;
