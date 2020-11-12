import React, { useState } from 'react'

const Title = () => {
    const [title, setTitle] = useState('Belajar React JS')
    const [subTitle, setSubTitle] = useState('')

    return (
        <div>
            <h1>{title}</h1>
            <p> {subTitle} </p>
        </div>
    )
}

export default Title
