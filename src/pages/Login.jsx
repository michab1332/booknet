import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginInit } from '../store/actions/auth'
import { useNavigate } from 'react-router-dom'

import "../assets/styles/AuthSections.css"

import LogoBookNet from '../assets/svgs/LogoBookNet'
import ErrorHandler from '../components/ErrorHandler'

export default function Signup() {
    const { currentUser } = useSelector(state => state.userAuth)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [state, setState] = useState({
        email: "",
        password: "",
        error: null
    })

    const { email, password, error } = state

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const setError = (errorName) => {
        setState({
            ...state,
            error: errorName
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "" && password === "") {
            setError("Email and password is empty")
            return;
        }
        if (password === "") {
            setError("Password is empty")
            return;
        }
        if (password.length <= 6) {
            setError("Password is too short. Minimum length is 6 letters")
            return;
        }
        if (email === "") {
            setError("Email is empty")
            return;
        }

        dispatch(loginInit(email, password))

        //reset state
        setState({
            email: "",
            password: ""
        })
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/")
        }
    }, [currentUser])

    return (
        <div className='auth'>
            <LogoBookNet />
            <form className='auth__form'>
                <div>
                    <label htmlFor="email">E-mail</label><br></br>
                    <input className='auth__form__input' type="text" name="email" onChange={handleInputChange} value={email} />
                </div>

                <div>
                    <label htmlFor="password">Password</label><br></br>
                    <input className='auth__form__input' type="password" name="password" onChange={handleInputChange} value={password} />
                </div>

                <div className="auth__form__buttonWrapper">
                    <button className='auth__form__button' onClick={e => handleSubmit(e)}>Log In</button>
                    <button className='auth__form__button-outline' onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
            </form >
            {error && <ErrorHandler error={error} />}
        </div >
    )
}
