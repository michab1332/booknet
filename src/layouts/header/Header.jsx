import React from 'react'

import LogoBookNet from '../../assets/svgs/LogoBookNet'

import '../../assets/styles/Header.css'

export default function Header() {
    return (
        <header className='headerContainer'>
            {/* <img src={require('../../assets/svgs/logoBookNet.svg').default} alt="Logo Book Net" className="headerContainer__logo" /> */}
            <div className="headerContainer__logo">
                <LogoBookNet />
            </div>
        </header>
    )
}
