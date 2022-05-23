import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import SvgButton from '../../components/SvgButton'
import homeIcon from '../../assets/svgs/homeIcon.svg'
import searchIcon from '../../assets/svgs/searchIcon.svg'
import yourBooksIcon from '../../assets/svgs/yourBooksIcon.svg'

import '../../assets/styles/NavigationBar.css'

const HIDDEN_PAGES = ["/reading", "/"]

export default function NavigtionBar() {
    const { pathname } = useLocation();
    let navigate = useNavigate();
    const changePage = (path) => {
        navigate(path)
    }
    return (
        HIDDEN_PAGES.includes(pathname) ? null : <div className='navigationBarContainer'>
            <SvgButton onClick={() => changePage('/home')} src={homeIcon} alt="home icon" text="Home page" />
            <SvgButton onClick={() => changePage('search')} src={searchIcon} alt="home icon" text="Search books" />
            <SvgButton onClick={() => changePage('/')} src={yourBooksIcon} alt="home icon" text="Your books" />
        </div>
    )
}
