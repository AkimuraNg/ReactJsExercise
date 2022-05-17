import React from 'react'
import { useState } from 'react'

const Ex4 = () => {
    const [count, setCount] = useState(0)
    function increase() {
        setCount(function(plus){
            return plus + 1
        })
    }
    return (
        <div className="ex4" style={{ textAlign: 'center' }}>
            <p>Button has been clicked: {count} times</p>
            <button onClick={increase}>Click Me!</button>
        </div>
    )
}

export default Ex4