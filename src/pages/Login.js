import React, { useState } from 'react';


function Login() {
    const [input, setInput] = useState('');

    function handleSubmit(e) {
        setInput(e.target.value);
    }
    return (

        <>
            <h1>Hi</h1>
            <form onSubmit={handleSubmit}>
                <label>Bank Account:</label>
                <input type="text"
                    value={input}
                    placeholder="Ex: 12345679"
                    >
                </input>
                <button>Submit</button>
            </form>
        </>
    );
}

export default Login;
