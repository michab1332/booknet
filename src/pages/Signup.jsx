import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store'

import LogoBookNet from '../assets/svgs/LogoBookNet'

export default function Signup() {
    const userAuth = useSelector(state => state.userAuth)
    const dispatch = useDispatch()
    const { logIn } = bindActionCreators(actionCreators, dispatch)
    logIn()
    console.log(userAuth)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const handleSetInputValue = (event, setValue) => {
        setValue(event.target.value)
    }

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
                    <input type="text" id="email" onChange={e => handleSetInputValue(e, setEmail)} />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => handleSetInputValue(e, setPassword)} />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label htmlFor="passwordConfirmation">Password confirmation</label>
                    <input type="password" id="passwordConfirmation" onChange={e => handleSetInputValue(e, setPasswordConfirmation)} />
                </div>
                <button>Sign Up</button>
                <button>Log In</button>
            </form>
        </div>
    )
}
