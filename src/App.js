import React, {useState, useEffect} from 'react'
import ChatDisplay from "./components/chat/ChatDisplay";
import ProjectDisplay from "./components/projects/ProjectDisplay";
import Input from './components/Input';

function App() {

  const [text, setText] = useState('')
  const [inputLocked, setInputLocked] = useState(false)

  return (
    <>
    <ChatDisplay inputText={text} setInputLocked={setInputLocked}/>
    <Input setText={setText} inputLocked={inputLocked}/>
    <ProjectDisplay inputText={text} />
    </>
  );
}

export default App;
