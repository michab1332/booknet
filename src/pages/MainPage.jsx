import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Login'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import BookPage from './BookPage'
import ReadingPage from './ReadingPage'
import NavigtionBar from '../layouts/NavigationBar/NavigtionBar'

export default function MainPage() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/book" element={<BookPage />} >
                    <Route path=":bookId" element={<BookPage />} />
                </Route>
                <Route path="reading" element={<ReadingPage />} />
            </Routes>
            <NavigtionBar />
        </BrowserRouter>
    )
}
