import React from 'react'
import styled from 'styled-components'

// icons
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";


export default function ProfileMain()
{

    return (
        <ProfileMainCSS>
            <span className='nameSection'> Dylan Evelyn </span>
            <span className='aboutMeSection'> Full Stack Developer </span>

            <span className='textSection'> Building responsive, accessible web applications with modern technologies </span>

            <span className='iconsSection'>

                <a href='http://linkedin.com/in/dylan-evelyn'> <FaLinkedin/> </a>
                <a href='http://github.com/djevelyn'> <FaGithub/> </a>
                <a href="mailto:DylanJamesEvelyn@hotmail.co.uk"> <FaEnvelope /> </a> 

            </span>

            <button style={{gridArea: 'contact'}}> Contact Me </button>
        </ProfileMainCSS>
    )

}

const ProfileMainCSS = styled.div `

    box-sizing: border-box;
    overflow: hidden;

    min-width: 100%;
    min-height: 100%; 

    //border: 1px dashed purple; // for debugging
    border-bottom: 1px solid lightgray; 

    display: grid;

    grid-template-columns: 40% 1fr;
    grid-template-rows: 25% 50% 25%;
    grid-template-areas:
    'name about'
    'text text'
    'icons contact';

    .nameSection {
        grid-area: name;

        font-weight: bold;
    }

    .aboutMeSection {
        grid-area: about;
    }

    .textSection {
        max-height: 100%;
        max-width: 100%;
        grid-area: text; 
        font-style: italic;
        font-size: 1em; 
    }

    .nameSection, .aboutMeSection {
        padding: 1px;
        color: white;
        background: linear-gradient(135deg, #2b5876 0%, #4e4376 100%);
    }

    .nameSection, .aboutMeSection, .textSection {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .iconsSection {
        grid-area: icons;

        display: flex;
        justify-content: space-evenly;
        align-items: center;     
    }

    .iconsSection * {
        max-height: 100%;
        max-width: auto; 
    }

`