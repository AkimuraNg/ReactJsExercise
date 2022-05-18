import React from 'react'
import db from '../db.json'

const Ex8 = () => {
    return (
        <div className="jokes" style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center',
            textAlign: 'center', marginTop: 100
        }}>
            {db.map(post => {
                return (
                    <div className="card" style={{
                        width: 300, height: 150,
                        marginRight: 30, borderRadius: 8, padding: 5, background: 'cyan'
                    }}>
                        <h3>{post.setup}</h3>
                        <p>{post.punchline}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Ex8