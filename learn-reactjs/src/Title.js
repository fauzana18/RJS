import React, { useState } from 'react'

const Title = () => {
    const [title, setTitle] = useState('Aplikasi React Pertamaku')
    const [subTitle, setSubTitle] = useState('Dibuat dengan semangat!')

    return (
        <div>
            <h1>{title}</h1>
            <p> {subTitle} </p>
        </div>
    )
}

export default Title
