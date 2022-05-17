import React from 'react'

const Ex5 = () => {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'horse'];
    const list = animals.map(animal => <li>{animal}</li>)
    return (
        <div className='ex5' style={{ textAlign: 'center' }}>
            {list}
        </div>
    )
}

export default Ex5