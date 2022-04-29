import React, { useState } from 'react'


const Test = ({hidden, click}) => {
    
  return (
    <div>
        <div className={hidden ? 'text-red-500 border-2 bg-red-500 rounded-full w-20 h-20':''}></div>
        <h3 onClick={click()}>Test</h3>
    </div>
  )
}
export default Test