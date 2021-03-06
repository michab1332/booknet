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
                    <p className="user__header__logout" onClick={handleLogout}>Wyloguj si??</p>
                </div>
                <div className="user__stats">
                    <div className="user__stats__item">
                        <p className="user__stats__item__number">{user.data.addedBooks.length}</p>
                        <p className="user__stats__item__text">Dodane ksi????ki</p>
                    </div>
                    <div className="user__stats__item">
                        <p className="user__stats__item__number">{user.data.readBooks.length}</p>
                        <p className="user__stats__item__text">Przeczytane ksi????ki</p>
                    </div>
                    <div className="user__stats__item">
                        <p className="user__stats__item__number">{user.data.likedBooks.length}</p>
                        <p className="user__stats__item__text">Polubione ksi????ki</p>
                    </div>
                    <div className="user__stats__item">
                        <p className="user__stats__item__number">{user.data.readPages || 0}</p>
                        <p className="user__stats__item__text">Przeczytane strony</p>
                    </div>
                </div>

                <UserItems onClick={() => console.log("dodaj ksiazke")} text="Dodane ksi????ki" buttonText="Dodaj ksi????ke" data={state.addedBooks.data} />
                <UserItems onClick={() => navigate("/")} text="Przeczytane ksi????ki" buttonText="Przeczytaj ksi????ke" data={state.readBooks.data} />
                <UserItems onClick={() => navigate("/")} text="Polubione ksi????ki" buttonText="Polub ksi????ke" data={state.likedBooks.data} />

                <div className="user__readPages">
                    <h1>{user.data.readPages}</h1>
                    <p>tyle stron ju?? przeczyta??e?? na naszej stronie, dzi??kujemy</p>
                </div>
            </div>
            : <LoadingScreen />
    )
}