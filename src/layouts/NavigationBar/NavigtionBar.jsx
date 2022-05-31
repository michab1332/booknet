import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import SvgButton from '../../components/SvgButton'
import homeIcon from '../../assets/svgs/homeIcon.svg'
import searchIcon from '../../assets/svgs/searchIcon.svg'
import yourProfile from '../../assets/svgs/yourProfile.svg'

import '../../assets/styles/NavigationBar.css'

const HIDDEN_PAGES = ["/reading", "/signup", "/login"]

export default function NavigtionBar() {
    const { pathname } = useLocation();
    let navigate = useNavigate();
    const changePage = (path) => {
        navigate(path)
    }
    return (
        HIDDEN_PAGES.includes(pathname) ? null : <div className='navigationBarContainer'>
            <SvgButton onClick={() => changePage('/')} src={homeIcon} alt="home" text="Home page" />
            <SvgButton onClick={() => changePage('search')} src={searchIcon} alt="search" text="Search books" />
            <SvgButton onClick={() => changePage('user')} src={yourProfile} alt="profile" text="Your profile" />
        </div>
    )
}
