import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './HomePage'
import SearchPage from './SearchPage'
import BookPage from './BookPage'
import ReadingPage from './ReadingPage'
import NavigtionBar from '../layouts/NavigationBar/NavigtionBar'
import Login from './Login'
import Signup from './Signup'

export default function MainPage() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
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
