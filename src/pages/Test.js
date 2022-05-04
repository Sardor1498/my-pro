import React, { useState } from 'react'


const Test = ({hidden, click}) => {

    return (
        <>
            <div
                className={hidden ? 'w-20 h-20 text-red-500 bg-red-500 rounded-full border-2' : ""}
            >
            </div>
            <button onClick={click}>Click</button>
        </>
    )
}

export default Test