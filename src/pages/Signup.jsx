import React from 'react'

import LogoBookNet from '../assets/svgs/LogoBookNet'

export default function Signup() {
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
                    <input type="text" id="email" />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label htmlFor="passwordConfirmation">Password confirmation</label>
                    <input type="password" id="passwordConfirmation" />
                </div>
                <button>Sign Up</button>
                <button>Log In</button>
            </form>
        </div>
    )
}
