import React from 'react'
import { useSelector } from 'react-redux'

import '../assets/styles/User.css'

export default function User() {
    const { currentUser } = useSelector(state => state.userAuth)
    console.log(currentUser)
    return (
        <div className="user">
            <p className="user__name">Michab</p>
            <div className="user__stats">
                <div className="user__stats__item">
                    <p className="user__stats__item__number">0</p>
                    <p className="user__stats__item__text">Dodane książki</p>
                </div>
                <div className="user__stats__item">
                    <p className="user__stats__item__number">2</p>
                    <p className="user__stats__item__text">Przeczytane książki</p>
                </div>
                <div className="user__stats__item">
                    <p className="user__stats__item__number">10</p>
                    <p className="user__stats__item__text">Polubione książki</p>
                </div>
                <div className="user__stats__item">
                    <p className="user__stats__item__number">3212</p>
                    <p className="user__stats__item__text">Przeczytane strony</p>
                </div>
            </div>
        </div>
    )
}