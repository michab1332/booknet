import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutInit } from '../store/actions/auth';
import getUserById from '../firebase/getUserById';
import getBooksByIds from '../firebase/getBooksByIds';
import { useNavigate } from 'react-router-dom';

import LoadingScreen from '../components/LoadingScreen';

import '../assets/styles/User.css';

import UserItems from '../layouts/User/UserItems';

export default function User() {
    const [state, setState] = useState({
        addedBooks: {
            loading: true,
            data: []
        },
        readBooks: {
            loading: true,
            data: []
        },
        likedBooks: {
            loading: true,
            data: []
        }
    });
    const { currentUser } = useSelector(state => state.userAuth);
    const [user, setUser] = useState({
        loading: true,
        data: {}
    })
    const { uid, readPages } = currentUser;
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutInit());
    }

    useEffect(() => {
        getUserById(uid).then(data => {
            setUser({
                data,
                loading: false
            })
        })
    }, [])

    useEffect(() => {
        if (user.loading === false) {
            getBooksByIds(user.data.addedBooks).then(data => {
                setState(prevState => ({
                    ...prevState,
                    addedBooks: {
                        loading: false,
                        data
                    }
                }))
            })

            getBooksByIds(user.data.readBooks).then(data => {
                setState(prevState => ({
                    ...prevState,
                    readBooks: {
                        loading: false,
                        data
                    }
                }))
            })

            getBooksByIds(user.data.likedBooks).then(data => {
                setState(prevState => ({
                    ...prevState,
                    likedBooks: {
                        loading: false,
                        data
                    }
                })
                )
            })
        }
    }, [user])

    return (
        user.loading === false ?
            <div className="user">
                <div className="user__header">
                    <p className="user__header__name">{user.data.name}</p>
                    <p className="user__header__logout" onClick={handleLogout}>Wyloguj się</p>
                </div>
                <div className="user__stats">
                    <div className="user__stats__item">
                        <p className="user__stats__item__number">{user.data.addedBooks.length}</p>
                        <p className="user__stats__item__text">Dodane książki</p>
                    </div>
                    <div className="user__stats__item">
                        <p className="user__stats__item__number">{user.data.readBooks.length}</p>
                        <p className="user__stats__item__text">Przeczytane książki</p>
                    </div>
                    <div className="user__stats__item">
                        <p className="user__stats__item__number">{user.data.likedBooks.length}</p>
                        <p className="user__stats__item__text">Polubione książki</p>
                    </div>
                    <div className="user__stats__item">
                        <p className="user__stats__item__number">{user.data.readPages || 0}</p>
                        <p className="user__stats__item__text">Przeczytane strony</p>
                    </div>
                </div>

                <UserItems onClick={() => navigate("/")} text="Polubione książki" buttonText="Polub książke" data={state.likedBooks.data} />
                <UserItems onClick={() => console.log("dodaj ksiazke")} text="Dodane książki" buttonText="Dodaj książke" data={state.addedBooks.data} />
                <UserItems onClick={() => navigate("/")} text="Przeczytane książki" buttonText="Przeczytaj książke" data={state.readBooks.data} />

                <div className="user__readPages">
                    <h1>{user.data.readPages}</h1>
                    <p>tyle stron już przeczytałeś na naszej stronie, dziękujemy</p>
                </div>
            </div>
            : <LoadingScreen />
    )
}