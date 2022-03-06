import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './HomePage'
import SearchPage from './SearchPage'
import NavigtionBar from '../layouts/NavigationBar/NavigtionBar'

export default function MainPage() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
            <NavigtionBar />
        </BrowserRouter>
    )
}
