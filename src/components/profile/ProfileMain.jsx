import React from 'react'
import styled from 'styled-components'

export default function ProfileMain()
{

    return (
        <ProfileMainCSS>
            <span className='nameSection'> Dylan Evelyn </span>
            <span className='aboutMeSection'> About Me </span>


            <button style={{gridArea: 'contact'}}> Contact Me </button>
        </ProfileMainCSS>
    )

}

const ProfileMainCSS = styled.div `

    box-sizing: border-box;

    min-width: 100%;
    min-height: 100%; 

    border: 1px dashed purple; 

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

`