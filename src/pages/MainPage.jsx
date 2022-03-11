import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './HomePage'
import SearchPage from './SearchPage'
import BookPage from './BookPage'
import NavigtionBar from '../layouts/NavigationBar/NavigtionBar'

export default function MainPage() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/book" element={<BookPage />} >
                    <Route path=":bookId" element={<BookPage />} />
                </Route>
            </Routes>
            <NavigtionBar />
        </BrowserRouter>
    )
}
