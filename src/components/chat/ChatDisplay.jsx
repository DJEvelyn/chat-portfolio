import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'

export default function ChatDisplay({inputText, setInputLocked})
{
    const [messages, setMessages] = useState([{user:'ai', message : '[Portfolio AI Assistant]'}])

    const addMessage = (user, message) => {
    const idValue = Date.now(); // Use a timestamp as a unique ID
    setMessages((prevMessages) => [...prevMessages, { id: idValue, user: user, message: message }]);
    };


    /* Submission handling */
    useEffect(() =>
    {
      if (inputText.length === 0)
        return;

      handleMessage(inputText);

    }, [inputText]); // When inputText changes, submission has occured

    const handleMessage = async (inputValue) =>
    {
      addMessage('user', inputValue)
      setInputLocked(true) // Lock text input
      await aiSubmit(inputValue)
      setInputLocked(false) // Unlock text input
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
      <ChatDisplayCSS>
      {[...messages].reverse().map((i) => ( /* Revered cloned list */
          <div
          key={i.id}
          className={`message ${i.user === "ai" ? "received" : "sent"}`}
          >
          {i.message}
          </div>
      ))}
      </ChatDisplayCSS>
    )
}  

const ChatDisplayCSS = styled.div `

    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column-reverse; /* For displaying new entries at bottom */
    overflow-anchor: auto !important;

    .message {
      max-width: 60%;
      padding: 10px;
      margin: 10px;
      border-radius: 8px;
      font-family: Arial, sans-serif;
      font-size: 14px;
    }

    .received {
      background-color: #d1f7d6; /* Light green for AI messages */
      color: #333; /* Text color for AI messages */
      margin-right: auto; /* Align to the left */
      text-align: left;
      border-top-right-radius: 0;
    }

    .sent {
      background-color: #cde8ff; /* Light blue for User messages */
      color: #333; /* Text color for User messages */
      margin-left: auto; /* Align to the right */
      text-align: right;
      border-top-left-radius: 0;
    }

    body {
      display: flex;
      flex-direction: column;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9; /* Chat window background */
    }

    .chat-input-container {
      padding: 10px;
      background-color: #fff;
      border-top: 1px solid #ccc;
    }

`
