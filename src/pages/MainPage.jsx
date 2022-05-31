import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import BookPage from './BookPage'
import ReadingPage from './ReadingPage'
import NavigtionBar from '../layouts/NavigationBar/NavigtionBar'
import Login from './Login'
import Signup from './Signup'
import User from './User'

export default function MainPage() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<PrivateRoute><SearchPage /></PrivateRoute>} />
                <Route path="/book" element={<PrivateRoute><BookPage /></PrivateRoute>} >
                    <Route path=":bookId" element={<BookPage />} />
                </Route>
                <Route path="/reading" element={<PrivateRoute><ReadingPage /></PrivateRoute>} />
                <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
            </Routes>
            <NavigtionBar />
        </BrowserRouter>
    )
}
