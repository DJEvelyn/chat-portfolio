import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'

export default function ChatInput({addMessage})
{
    const handleSumbit = async (event) =>
    {
        event.preventDefault(); 
        const inputValue = event.target.searchInput.value;

        addMessage('user', inputValue)
        await aiSubmit(inputValue)
    }

    const aiSubmit = async (givenMessage) =>
    {
        fetch('http://localhost:3005/api/askAI/ask', 
        {
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify( { message : givenMessage }),
        method: 'PUT',
        })
        .then(response => response.json())
        .then(data => addMessage('ai', data));
    }

    return (
        <ChatInputCSS>
        <form className='inputForm' onSubmit={handleSumbit} id='inputForm'>
            <input className='searchInput' type='text' id='searchInput'/>
            <input className='searchButton' type='submit' value='Send' id='searchButton'/>
        </form>
        </ChatInputCSS>
    )

}

const ChatInputCSS = styled.div `

    #inputForm {
    display: flex;
    flex-wrap: nowrap; /* Ensures the input and button stay on the same row */
    width: 100%; /* Fills the available space */
    max-width: 600px; /* Optional: Limit the form width for larger screens */
    margin: 0 auto; /* Center the form horizontally */
    }

    #searchInput {
    flex: 1; /* Makes the input take up the remaining space */
    padding: 0.5rem; /* Adds some inner spacing for better usability */
    font-size: 1rem; /* Ensures text is readable */
    border: 1px solid #ccc;
    border-right: none; /* Remove duplicate border between input and button */
    border-radius: 4px 0 0 4px; /* Rounded left corners */
    }

    #searchButton {
    padding: 0.5rem 1rem; /* Adjust button size for usability */
    font-size: 1rem;
    background-color: #007bff; /* A modern blue shade */
    color: white;
    border: 1px solid #007bff;
    border-radius: 0 4px 4px 0; /* Rounded right corners */
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    #searchButton:hover {
    background-color: #0056b3; /* Darker blue for hover effect */
    }

    @media (max-width: 480px) { /* Adjustments for small screens */
    #searchInput {
        font-size: 0.9rem;
    }

    #searchButton {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }
}

`