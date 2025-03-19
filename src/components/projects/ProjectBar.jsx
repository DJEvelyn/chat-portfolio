import React from 'react'
import styled from 'styled-components'

export default function ProjectBar({id, name, start_date, end_date, bar_image, 
    tags, clickAction})
{
    return (
        <ProjectBarCSS onClick={clickAction}> 
            <div className='imgs-section'> <img src={bar_image} alt='project image'/> </div>
            <div className='title-section'> {name} </div>
            <div className='date-section'> <span>{start_date}  -  {end_date}</span> </div>
            <div className='tags-section'> {tags} </div>
        </ProjectBarCSS>
    )
}

const ProjectBarCSS = styled.div `

    width: 100%; 
    height: 100%;

    display: grid;

    grid-template-columns: 25% 1fr;
    grid-template-rows: 20% 1fr 20%;
    grid-template-areas:
        "imgs date"
        "imgs name"
        "imgs tags";

    background-color: #f5f5f5; /* Subtle background */
    border: 1px solid #ddd; /* Light border for separation */
    border-radius: 8px;
    overflow: hidden; /* Ensures content fits neatly */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

    .imgs-section {
        grid-area: imgs;

        min-width: 100%;
        min-height: 100%;

        background-color: #e9ecef; /* Neutral tone for image area */

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .imgs-section img {
        height: 100%;
        width: auto;
        object-fit: cover; /* Keeps image proportional */
        border-radius: 4px;
    }

    .tags-section {
        grid-area: tags;
        font-size: 12px;
        font-style: italic;
        color: #666; /* Muted tone for tags */
        padding: 10px;
        display: flex;
        align-items: center;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap; /* Keeps tags in a single line */
    }

    .title-section {
        grid-area: name;
        font-size: 18px;
        font-weight: bold;
        text-align: left;
        padding: 10px;
        color: #333; /* Stronger text color for title */
        border-bottom: 1px solid #ddd; /* Separates title visually */
    }

    .date-section {
        grid-area: date;
        font-size: 14px;
        color: #444; /* Neutral color for date */
        padding: 10px;
        text-align: center;
        background-color: #f8f9fa; /* Soft background tone for date */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* .imgs-section
    {
        outline: 1px dashed blue;
    }*/

    button {
        text-decoration: none;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        background-color: #0077cc; /* Academic blue for buttons */
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #005da5;
        }
    }
`