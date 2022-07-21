import { useState, useLayoutEffect, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import getBookById from "../firebase/getBookById";
import getUserById from "../firebase/getUserById";
import likeBookByIdToUserAccount from "../firebase/likeBookByIdToUserAccount";

import "../assets/styles/BookPage.css";

import BlurImage from "../layouts/BookPage/BlurImage";
import Button from "../components/Button";

export default function BookPage() {
    const { currentUser } = useSelector(state => state.userAuth);
    const [book, setBook] = useState({});
    const [addedBy, setAddedBy] = useState("");
    const [scrollY, setScrollY] = useState(0);
    const navigation = useNavigate();
    const { bookId } = useParams();

    useLayoutEffect(() => {
        getBookById(bookId).then(bookData => {
            setBook(bookData);
            getUserById(bookData.addedBy).then(userData => {
                setAddedBy(userData);
            })
        })
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
        likeBookByIdToUserAccount(book.id, currentUser.id);
        console.log(currentUser)
        console.log(`Polubiono ksiazke o id: ${book.id}`);
    }

    return (
        <div>
            <div className="bookPage">
                <BlurImage imgUrl={book.imgUrl} scrollY={scrollY} />
                <div className="bookPage__baseInf">
                    <p className="bookPage__baseInf__name">{book.name}</p>
                    <p className="bookPage__baseInf__author">{book.author}</p>
                </div>
                <div className="bookPage__buttons">
                    <Button text="Czytaj" onClick={handleGoToReadingPage} />
                    <Button text="Polub" outline onClick={handleLikeBook} />
                </div>
                <div className="bookPage__likes">
                    <img src="" alt="" className="bookPage__likeButton" />
                    <p className="bookPage__likes__text"></p>
                    <img src="" alt="" className="bookPage__disLikeButton" />
                </div>
                <div className="bookPage__desc">
                    <p className="bookPage__desc__views">{book.views} wyświetleń</p>
                    <p className="bookPage__desc__text">{book.description}</p>
                </div>
                <footer>
                    <p>Dodane przez: {addedBy.name}</p>
                </footer>
            </div>
        </div>
    )
}
