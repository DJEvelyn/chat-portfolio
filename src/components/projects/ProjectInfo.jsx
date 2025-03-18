import React from 'react'
import styled from 'styled-components'

// Info
export default function ProjectInfo({backAction, projectID})
{
    const [info, setInfo] = React.useState({});

    React.useEffect(() => 
    {
        //setInfo( getInfo(projectID) );
        fetch(`http://localhost:3005/info/${projectID}`)
        .then(response => response.json())
        .then(data => setInfo(data));  

        console.log(info); 

    }, [projectID]); 


    return (
        <ProjectInfoCSS>
            
            <div style={{gridArea : "back"}} onClick={backAction}> Back </div>
            <div style={{gridArea : "name"}}> {info.name} </div>
            <div style={{gridArea : "tags"}}> {info.tags} </div>
            <div style={{gridArea : "time"}}> <span> START: {info.start_date} </span>  <span> END: {info.end_date} </span>  </div>
            <div style={{gridArea : "view"}}> <img src={info.main_image} alt='project image'/> </div>
            <div style={{gridArea : "text"}}> {info.description} </div>
            <div style={{gridArea : "code"}}> <a href={info.code_link}>Code </a> </div>
            <div style={{gridArea : "demo"}}> <a href={info.demo_link}>Demo </a>  </div>

            {/* { getListOfSize(8 * 8).map(i => <div> {i} </div>)} */}

        </ProjectInfoCSS>
    )

}

const ProjectInfoCSS = styled.div `

width: 100%;
height: 100%;

display: grid;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: repeat(8, 1fr);

grid-template-areas:
"back name name name name name name name" 
"back tags tags tags tags tags tags tags"
"time time time time time time time time"
"view view view text text text text text"
"view view view text text text text text"
"view view view text text text text text"
"view view view text text text text text"
"code code code code demo demo demo demo"; 

div {
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 10px;
    border: 1px solid #ddd; /* Subtle border */
    background-color: #f9f9f9; /* Subtle background color */
    font-family: 'Arial', sans-serif;
    color: #333; /* Neutral text color */
    overflow: hidden; /* Ensure content stays within bounds */
}

div[style*="grid-area: back"] {
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    background-color: #0077cc; /* Academic blue */
    color: #fff;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

div[style*="grid-area: back"]:hover {
    background-color: #005da5;
}

img {
    max-height: 100%;
    max-width: 100%; 
    object-fit: cover; /* Ensures proper image fit */
}

a {
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #28a745; /* Green for portfolio buttons */
    transition: background-color 0.3s ease;
}

a:hover {
    background-color: #218838;
}

div[style*="grid-area: tags"] {
    font-size: 12px;
    font-style: italic;
}

div[style*="grid-area: time"] {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #eaeaea;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

div[style*="grid-area: name"] {
    font-size: 20px;
    font-weight: bold;
    color: #444;
}

div[style*="grid-area: text"] {
    text-align: left;
    line-height: 1.5;
}

`;