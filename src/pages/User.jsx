import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutInit } from '../store/actions/auth'

import '../assets/styles/User.css'

import UserItems from '../layouts/User/UserItems'

export default function User() {
    const { currentUser } = useSelector(state => state.userAuth);
    const { name, addedBooks, likedBooks, readBooks, readPages } = currentUser;
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutInit());
    }

    return (
        <div className="user">
            <div className="user__header">
                <p className="user__header__name">{name}</p>
                <p className="user__header__logout" onClick={handleLogout}>Wyloguj się</p>
            </div>
            <div className="user__stats">
                <div className="user__stats__item">
                    <p className="user__stats__item__number">{addedBooks}</p>
                    <p className="user__stats__item__text">Dodane książki</p>
                </div>
                <div className="user__stats__item">
                    <p className="user__stats__item__number">{likedBooks.length}</p>
                    <p className="user__stats__item__text">Przeczytane książki</p>
                </div>
                <div className="user__stats__item">
                    <p className="user__stats__item__number">{readBooks.length}</p>
                    <p className="user__stats__item__text">Polubione książki</p>
                </div>
                <div className="user__stats__item">
                    <p className="user__stats__item__number">{readPages || 0}</p>
                    <p className="user__stats__item__text">Przeczytane strony</p>
                </div>
            </div>

            <UserItems text="Dodane książki" buttonText="Dodaj książke" />
            <UserItems text="Przeczytane książki" buttonText="Przeczytaj książke" />
            <UserItems text="Polubione książki" buttonText="Polub książke" />

            <div className="user__readPages">
                <h1>{readPages}</h1>
                <p>tyle stron już przeczytałeś na naszej stronie, dziękujemy</p>
            </div>
        </div>
    )
}