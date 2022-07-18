import React, { useState } from 'react';
import { NavList } from '../components/NavList';

export function Login() {
    const [input, setInput] = useState('');

    function handleSubmit(e) {
        
    }

    return (
        <>
        <NavList />
            <form onChange={e => {
                setInput(e.target.value)
            }}>
                <label>Bank Account:</label>
                <input
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


