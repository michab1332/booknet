import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerInit } from '../store/actions/auth'
import { useNavigate } from 'react-router-dom'

import LogoBookNet from '../assets/svgs/LogoBookNet'

export default function Signup() {
    const { currentUser } = useSelector(state => state.userAuth)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const handleSetInputValue = (event, setValue) => {
        setValue(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== passwordConfirmation) {
            console.log("password dont match")
            return;
        }

        dispatch(registerInit(email, password, "display name"))

        //reset state
        setEmail("")
        setPassword("")
        setPasswordConfirmation("")

        console.log(currentUser)
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/")
        }
        console.log(currentUser)
    }, [currentUser])

    return (
        <div style={{
            backgroundColor: "#000",
            height: "100vh",
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '2rem',
            color: "#fff"
        }}>
            <LogoBookNet />
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" onChange={e => handleSetInputValue(e, setEmail)} value={email} />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => handleSetInputValue(e, setPassword)} value={password} />
                </div>

                <button onClick={e => handleSubmit(e)}>Log In</button>
                <button>Sign Up</button>
            </form>
        </div>
    )
}
