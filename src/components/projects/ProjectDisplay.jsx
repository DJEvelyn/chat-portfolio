import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ProjectInfo from './ProjectInfo';
import ProjectBar from './ProjectBar';

export default function ProjectDisplay({inputText})
{
    // TOGGLE HANDLING START
    const [open, setOpen] = React.useState(false); 
    const [ratio, setRatio] = React.useState([5, 5]);

    const buttonAction = () =>
    {
        console.log('Clicked button');

        setOpen(!open); 
    }

    React.useEffect(() =>
    {
        if (open)
            setRatio([0, 1]);
        else
            setRatio([1, 0]);

    }, [open]); 

    // TOGGLE HANDLING END

    // Tag query creation
    function getTagStrings(givenTags)
    {
        let tagsString = '?';

        for (let i = 0; i < givenTags.length; ++i)
        {
            const tagIndex = i + 1; 

            tagsString += `tag${tagIndex}=${givenTags[i]}`;

            if (tagIndex < givenTags.length)
                tagsString += `&`;       
        }

        return tagsString; 
    }

    // PROJECT GETTER START

    const [selectedProjectID, setSelectedProjectID] = React.useState(null); 
    const [projectList, setProjectList] = React.useState([])
    const [tags, setTags] = React.useState([''])



    // ADJUST TAGS ON INPUT CHANGE
    useEffect(() => 
    {
        if (inputText.length === 0)
            return;
        
        aiSubmit(inputText); 

    }, [inputText]); 

    const aiSubmit = async (givenMessage) =>
    {
        fetch('https://djevelyn.helioho.st/portfolio/api/askAI/list', 
        {
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify( { message : givenMessage }),
            method: 'PUT',
        })
        .then(response => response.json())
        .then(data => { const list = JSON.parse(JSON.parse(data)); setTags(list) } );
    }

    React.useEffect(() =>
    {
        console.log(`Tags are ${tags}`)

        console.log(`Tags 0th is ${tags[0]}`)

        console.log(`Tag strings are ${getTagStrings(tags)}`);

        fetch (`https://djevelyn.helioho.st/portfolio/bar/all${getTagStrings(tags)}`)
        .then(response => response.json())
        .then(data => { console.log(`Data is ${data}`);  setProjectList( data ) });

    }, [tags]); 


    const setID = (givenID) =>
    {
        setOpen(true);
        setSelectedProjectID(givenID); 
    };

    // PROJECT GETTER END

    return (
        <React.Fragment>
        
        {/* <div> Open status is {open? "open" : "closed"} </div>
        <button onClick={buttonAction}> Toggle </button> */}

        <span className='projects-header' 
        style={{width: '100%', fontWeight: 'bold', display: 'flex', 
        justifyContent: 'center' }}> 
        Projects & Qualifications </span>

            <ProjectDisplayCSS style={{gridTemplateRows : `${ratio[0]}fr ${ratio[1]}fr`}}> 
                <div className='project-list' style={{height: open? '0%' : '100%'}}> 
                    {open? <div> </div> : projectList.map(i => {
                        return <div key={i.id}> <ProjectBar {...i} clickAction={() => {setID(i.id)}}/> </div>
                    })}
                </div>

                <div>
                    {open? <ProjectInfo backAction={buttonAction} 
                    projectID={selectedProjectID}/> 
                    : <div> </div> }
                </div>
            </ProjectDisplayCSS>
        </React.Fragment>

    )
}

const ProjectDisplayCSS = styled.div `

    box-sizing: border-box;
    
    width: 100%;
    height: 100%; 

    //display: grid;
    //border: 1px solid purple; 

    // * {        
    //     border: 1px solid purple; 
    // }

    //overflow-x: hidden;

    .project-list {
        height: 100%; 
        display: flex;

        flex-direction: column;

        overflow-y: auto; 

        //grid-template-columns: 1fr;
        //grid-template-rows: auto;
    } 

    .project-list div {
        /* display: flex;

        justify-content: center;
        align-items: center; 
        */

        height: 30%; 
        
        //width: 95%;
        //height: 95%; 
    }
`