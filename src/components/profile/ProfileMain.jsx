import React from 'react'
import styled from 'styled-components'

// icons
import { FaLinkedin, FaGithub } from "react-icons/fa6";


export default function ProfileMain()
{

    return (
        <ProfileMainCSS>
            <span className='nameSection'> Dylan Evelyn </span>
            <span className='aboutMeSection'> About Me </span>

            <span className='iconsSection'>

                <a href='http://linkedin.com/in/dylan-evelyn'> <FaLinkedin/> </a>
                <a href='http://github.com/djevelyn'> <FaGithub/> </a>

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
    'image text'
    'icons contact';

    .nameSection {
        grid-area: name;

        font-weight: bold;
    }

    .aboutMeSection {
        grid-area: about;
    }

    .nameSection, .aboutMeSection {
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