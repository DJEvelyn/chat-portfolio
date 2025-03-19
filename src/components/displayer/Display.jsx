import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Display = ({header, top, search, bottom}) =>
{

    return (
        <DisplayCSS>
            <div className='holder'>
                <div className='holder-element'> {header} </div>
                <div className='holder-element'> {top} </div>
                <div className='holder-element'> {search} </div>
                <div className='holder-element'> {bottom} </div>
            </div>
        </DisplayCSS>
    )


}

const DisplayCSS = styled.div`

    height: 100vh; /* Ensures full height of the viewport */
    width: 50%; /* Default width for desktop screens */

    display: flex;
    justify-content: center;
    align-items: center;

    .holder {
        width: 100%;
        height: 100%;
        overflow: hidden;

        display: grid;
        grid-template-rows: 10% 30% 10% 50%;
        /* grid-template-rows: 2fr 3fr 1fr 3fr; */
    }

    .holder-element {
        overflow-y: auto; 

        margin-top: 5px;
        margin-bottom: 5px;
    }

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        width: 100%; /* Full width on smaller screens */
    }

`;

export default Display; 