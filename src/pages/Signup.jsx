import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerInit } from '../store/actions/auth'
import { useNavigate } from 'react-router-dom'

import "../assets/styles/AuthSections.css"

import LogoBookNet from '../assets/svgs/LogoBookNet'
import ErrorHandler from '../components/ErrorHandler'

export default function Signup() {
    const { currentUser, loading } = useSelector(state => state.userAuth)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [state, setState] = useState({
        email: "",
        name: "",
        password: "",
        passwordConfirmation: "",
        error: null
    })

    const { email, name, password, passwordConfirmation, error } = state

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

        if (password !== passwordConfirmation) {
            setError("Passwords do not match")
            return;
        }
        if (password.length < 6) {
            setError("Password is too short. Min 6 letters")
            return;
        }
        if (email === "") {
            setError("Email is empty")
            return;
        }
        if (email === "" && password === "") {
            setError("Email and password is empty")
            return;
        }

        dispatch(registerInit(email, password, name));

        //reset state
        setState({
            email: "",
            name: "",
            password: "",
            passwordConfirmation: ""
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
            <form className='auth__form' style={{
                display: loading ? "none" : null
            }}>
                <div>
                    <label htmlFor="email">E-mail</label> <br></br>
                    <input className='auth__form__input' type="text" name="email" onChange={handleInputChange} value={email} />
                </div>

                <div>
                    <label htmlFor="name">Name</label> <br></br>
                    <input className='auth__form__input' type="text" name="name" onChange={handleInputChange} value={name} />
                </div>

                <div>
                    <label htmlFor="password">Password</label><br></br>
                    <input className='auth__form__input' type="password" name="password" onChange={handleInputChange} value={password} />
                </div>

                <div>
                    <label htmlFor="passwordConfirmation">Password confirmation</label><br></br>
                    <input className='auth__form__input' type="password" name="passwordConfirmation" onChange={handleInputChange} value={passwordConfirmation} />
                </div>
                <div className="auth__form__buttonWrapper">
                    <button className='auth__form__button' onClick={e => handleSubmit(e)}>Sign Up</button>
                    <button className='auth__form__button-outline' onClick={() => navigate("/login")}>Log In</button>
                </div>
            </form>
            {error && <ErrorHandler error={error} />}
        </div>
    )
}
