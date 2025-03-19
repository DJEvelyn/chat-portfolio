import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Display = () =>
{

    return (
        <DisplayCSS>

            <div> Header </div>
            <div> Top </div>
            <div> Search </div>
            <div> Bottom </div>

        </DisplayCSS>
    )


}

const DisplayCSS = styled.div`

    height: 100vh; /* Ensures full height of the viewport */
    width: 50%; /* Default width for desktop screens */

    display: grid;
    grid-template-rows: repeat(4, 1fr);

    text-align: center;

    /* Style each section */
    div:nth-child(1) {
        background-color: red;
    }

    div:nth-child(2) {
        background-color: blue;
    }

    div:nth-child(3) {
        background-color: orange;
    }

    div:nth-child(4) {
        background-color: green;
    }

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        width: 100%; /* Full width on smaller screens */
    }

`;

export default Display; 