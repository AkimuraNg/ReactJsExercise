import React, {useState} from 'react'

const Ex7 = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    return (
        <div className="ex7" style={{ textAlign: 'center' }}>
            <form>
                <label style={{ textAlign: 'center', display: 'block' }}>First Name</label>
                <input type="text" 
                style={{ width: '300px', padding: 6, margin: 10 }} 
                value={firstName} onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"/>

                <label style={{ textAlign: 'center', display: 'block' }}>Last Name</label>
                <input type="text" 
                style={{ width: '300px', padding: 6, margin: 10 }} 
                value={lastName} onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"/>
            </form>
            <button style={{ background: 'red', border: '1px solid black', cursor: 'pointer', 
            height: 50, width: 100, borderRadius: 8, color: 'white' }}
            onClick={() => alert('Hello '+ [firstName] + ' ' + [lastName])}>Greet Me</button>
        </div>
    )
}

export default Ex7