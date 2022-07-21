import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutInit } from '../store/actions/auth';
import getBooksByIds from '../firebase/getBooksByIds';
import { useNavigate } from 'react-router-dom';

import '../assets/styles/User.css';

import UserItems from '../layouts/User/UserItems';

export default function User() {
    const [state, setState] = useState({
        addedBooks: [],
        readBooks: [],
        likedBooks: []
    });
    const { currentUser } = useSelector(state => state.userAuth);
    const { name, addedBooks, likedBooks, readBooks, readPages } = currentUser;
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutInit());
    }

    useEffect(() => {
        getBooksByIds(addedBooks).then(data => {
            setState(prevState => ({
                ...prevState,
                addedBooks: data
            }))
        })

        getBooksByIds(readBooks).then(data => {
            setState(prevState => ({
                ...prevState,
                readBooks: data
            }))
        })

        getBooksByIds(likedBooks).then(data => {
            console.log(data)
            setState(prevState => ({
                ...prevState,
                likedBooks: data
            })
            )
        })

    }, [])

    return (
        <div className="user">
            <div className="user__header">
                <p className="user__header__name">{name}</p>
                <p className="user__header__logout" onClick={handleLogout}>Wyloguj się</p>
            </div>
            <div className="user__stats">
                <div className="user__stats__item">
                    <p className="user__stats__item__number">{addedBooks.length}</p>
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

            <UserItems onClick={() => console.log("dodaj ksiazke")} text="Dodane książki" buttonText="Dodaj książke" data={state.addedBooks} />
            <UserItems onClick={() => navigate("/")} text="Przeczytane książki" buttonText="Przeczytaj książke" data={state.readBooks} />
            <UserItems onClick={() => navigate("/")} text="Polubione książki" buttonText="Polub książke" data={state.likedBooks} />

            <div className="user__readPages">
                <h1>{readPages}</h1>
                <p>tyle stron już przeczytałeś na naszej stronie, dziękujemy</p>
            </div>
        </div>
    )
}