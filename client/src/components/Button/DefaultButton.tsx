import React from 'react'

interface Props {
    width: string;
    height: string;
    text: string;
    disabled?: boolean;
}

const DefaultButton: React.FC<Props> = ({ width, height, text, disabled }) => {
    return (
        <button type="submit" disabled={disabled}
        className={`w-${width} h-${height} 
          bg-primary rounded-md text-center text-white font-bold cursor-pointer hover:bg-opacity-80`}>
            { text }
        </button>
    )
}

export default DefaultButton
