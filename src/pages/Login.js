import React, { useState } from 'react';
import { NavList } from '../components/NavList';



export function Login() {
    const [input, setInput] = useState('');
    function handleSubmit() {
    
    }
    return (
        <>
        <NavList />
            <form>
                <label>Bank Account:</label>
                <input
                    onChange={(e) => { setInput(e.target.value)}}
                    type="text"
                    value={input}
                    placeholder="Ex: 12345679"
                >
                </input>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </>
    );
}


