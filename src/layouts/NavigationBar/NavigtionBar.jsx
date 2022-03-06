import React from 'react'
import { useNavigate } from 'react-router-dom'

import SvgButton from '../../components/SvgButton'
import homeIcon from '../../assets/svgs/homeIcon.svg'
import searchIcon from '../../assets/svgs/searchIcon.svg'
import yourBooksIcon from '../../assets/svgs/yourBooksIcon.svg'

import '../../assets/styles/NavigationBar.css'

export default function NavigtionBar() {
    let navigate = useNavigate();
    const changePage = (path) => {
        navigate(path)
    }
    return (
        <div className='navigationBarContainer'>
            <SvgButton onClick={() => changePage('/')} src={homeIcon} alt="home icon" text="Home page" />
            <SvgButton onClick={() => changePage('search')} src={searchIcon} alt="home icon" text="Search books" />
            <SvgButton onClick={() => changePage('/')} src={yourBooksIcon} alt="home icon" text="Your books" />
        </div>
    )
}