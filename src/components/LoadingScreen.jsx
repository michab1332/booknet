import React from 'react'

import LoadingIcon from '../assets/svgs/LoadingIcon';

import "../assets/styles/LoadingScreen.css";

export default function LoadingScreen() {
    return (
        <div className='loading'>
            <LoadingIcon />
        </div>
    )
}
