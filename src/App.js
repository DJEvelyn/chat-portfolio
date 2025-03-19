import React, {useState, useEffect} from 'react'
import ChatDisplay from "./components/chat/ChatDisplay";
import ProjectDisplay from "./components/projects/ProjectDisplay";
import Input from './components/Input';
import styled from 'styled-components'
import Profile from './components/profile/Profile';

import Display from './components/displayer/Display.jsx';

function App() {

  const [text, setText] = useState('')
  const [inputLocked, setInputLocked] = useState(false)

  return (
    <MainCSS>
      <div className='container'>
        
        {/* <Profile/>
        <div style={{gridArea: 'chat'}}>
          <ChatDisplay inputText={text} setInputLocked={setInputLocked}/>
        </div>
        <div style={{gridArea: 'input'}}>
          <Input setText={setText} inputLocked={inputLocked}/>
        </div>
        <div style={{gridArea: 'project'}}>
          <ProjectDisplay inputText={text} />
        </div> */}

        <Display/>

      </div>
    </MainCSS>
  );
}

export default App;


const MainCSS = styled.div `

  width: 100%; 
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%; 
    height: 100%;

    display: grid;
    grid-template-rows: 30% 10% 1fr; 
    grid-template-areas:
    "chat"
    "input"
    "project"
  }

  /* @media screen and (min-width: 768px)
  {
    width: 50%;
  } */


`