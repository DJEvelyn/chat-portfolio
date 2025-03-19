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
        <Display 
        header={<Profile/>}
        top={<ChatDisplay inputText={text} setInputLocked={setInputLocked}/>}
        search={<Input setText={setText} inputLocked={inputLocked}/>}
        bottom={<ProjectDisplay inputText={text} />}
        />
    </MainCSS>
  );
}

export default App;


const MainCSS = styled.div `

  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  /* @media screen and (min-width: 768px)
  {
    width: 50%;
  } */


`