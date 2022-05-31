import React from 'react'
import { useSelector } from 'react-redux'

export default function User() {
    const { currentUser } = useSelector(state => state.userAuth)
    console.log(currentUser)
    return (
        <div>User</div>
    )
}