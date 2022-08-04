import { useState, useLayoutEffect, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import getBookById from "../firebase/getBookById";
import getUserById from "../firebase/getUserById";
import checkIfUserLikeBookById from "../firebase/checkIfUserLikeBookById";
import likeBookByIdToUserAccount from "../firebase/likeBookByIdToUserAccount";
import removeBookFromLikedArrayById from "../firebase/removeBookFromLikedArrayById";

import "../assets/styles/BookPage.css";

import LoadingScreen from "../components/LoadingScreen";
import BlurImage from "../layouts/BookPage/BlurImage";
import Button from "../components/Button";

export default function BookPage() {
    const { currentUser } = useSelector(state => state.userAuth);
    const [book, setBook] = useState({
        data: {},
        isLiked: false,
        loading: true
    });
    const [addedBy, setAddedBy] = useState("");
    const [scrollY, setScrollY] = useState(0);
    const navigation = useNavigate();
    const { bookId } = useParams();

    useLayoutEffect(() => {
        getBookById(bookId).then(bookData => {
            setBook(prevState => ({
                ...prevState,
                data: bookData,
                loading: false
            }));

            getUserById(bookData.addedBy).then(userData => {
                setAddedBy(userData);
            })
        })
        checkIfUserLikeBookById(currentUser.uid, parseInt(bookId)).then(isLiked => {
            setBook(prevState => ({
                ...prevState,
                isLiked
            }))
        });
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    })

    const handleScroll = () => {
        window.addEventListener('scroll', (e) => {
            setScrollY(window.scrollY);
        })
    }

    const handleGoToReadingPage = () => {
        navigation("/reading", {
            state: {
                pdfUrl: book.pdfUrl
            }
        })
    }

    const handleLikeBook = () => {
        likeBookByIdToUserAccount(book.data.id, currentUser.uid);
        setBook(prevState => ({
            ...prevState,
            isLiked: !prevState.isLiked
        }))
        console.log(`Polubiono ksiazke o id: ${book.data.id}`);
    }

    const handleDislikeBook = () => {
        removeBookFromLikedArrayById(book.data.id, currentUser.uid);
        setBook(prevState => ({
            ...prevState,
            isLiked: !prevState.isLiked
        }))
        console.log(`odlubiono ksiazke o id: ${book.data.id}`);
    }

    return (
        book.loading === true ? <LoadingScreen /> :
            <div>
                <div className="bookPage">
                    <BlurImage imgUrl={book.data.imgUrl} scrollY={scrollY} />
                    <div className="bookPage__baseInf">
                        <p className="bookPage__baseInf__name">{book.data.name}</p>
                        <p className="bookPage__baseInf__author">{book.data.author}</p>
                    </div>
                    <div className="bookPage__buttons">
                        <Button text="Czytaj" onClick={handleGoToReadingPage} />
                        <Button text={book.isLiked ? "Dislike" : "Like"} outline onClick={book.isLiked ? handleDislikeBook : handleLikeBook} />
                    </div>
                    <div className="bookPage__likes">
                        <img src="" alt="" className="bookPage__likeButton" />
                        <p className="bookPage__likes__text"></p>
                        <img src="" alt="" className="bookPage__disLikeButton" />
                    </div>
                    <div className="bookPage__desc">
                        <p className="bookPage__desc__views">{book.data.views} wyświetleń</p>
                        <p className="bookPage__desc__text">{book.data.description}</p>
                    </div>
                    <footer>
                        <p>Dodane przez: {addedBy.name}</p>
                    </footer>
                </div>
            </div>
    )
}
