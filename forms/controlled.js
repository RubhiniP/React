import React, { useState } from 'react';

function Controlled(){

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [comments, setComments] = useState('');
    const [topic, setTopic] = useState('react');

    const Submit = e => {
        console.log(`Name: ${name}`);
        console.log(`Password: ${password}`);
        console.log(`Comments: ${comments}`);
        console.log(`Option: ${topic}`);
        alert(`${name} ${password}, ${comments}`);
        e.preventDefault();
    }

    return(
        <div>
        <form onSubmit={Submit}>
            <input type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}required></input>

            <input type="password"
            name="text"
            value={password}
            onChange={e => setPassword(e.target.value)}required></input>

            <textarea name="comments"
            value={comments}
            onChange={e => setComments(e.target.value)}required></textarea>

            <select value={topic} onChange={e => setTopic(e.target.value)}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='other'>Others</option>                
            </select>

            <input type='submit' value='submit' />
        </form>
            <p>{JSON.stringify(name)}</p>
            <p>{JSON.stringify(password)}</p>
            <p>{JSON.stringify(comments)}</p>

        </div>
        
       
    );

    
}

export default Controlled;