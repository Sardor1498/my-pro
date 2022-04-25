import React, { useState } from 'react'


const Test = () => {
    const [hidden, setHidden] = useState(false)
    console.log(hidden)

    function LinkClick() {
        hidden === false ? setHidden(true) : setHidden(false)
      }
  return (
    <div>
        <div className={hidden === false ? '' : 'bg-red-800 rounded-full w-10 h-10'}></div>
        <h3 onClick={() => LinkClick()}>Test</h3>
    </div>
  )
}
export default Test