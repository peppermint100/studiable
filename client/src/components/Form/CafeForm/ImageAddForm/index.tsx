import React, { useState } from 'react'
import styled from 'styled-components'
import ImageAddButton from '../../../StyleProperties/ImageAddButton/ImageAddButton'

const ImageAddForm = () => {
    return (
        <Input type="file" />
    )
}

const Input = styled.input`
    position: absolute;
    width: 200px;
    height: 200px;
    opacity: 0;
    cursor: pointer;
`

export default ImageAddForm;
