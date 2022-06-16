import { useState, useLayoutEffect, useEffect } from "react";
import { useParams } from "react-router-dom";
import getBookById from "../firebase/getBookById";
import "../assets/styles/BookPage.css";

import BlurImage from "../layouts/BookPage/BlurImage";

export default function BookPage() {
    const [book, setBook] = useState({});
    const [scrollY, setScrollY] = useState(0);
    const { bookId } = useParams();

    useLayoutEffect(() => {
        getBookById(bookId).then(book => {
            setBook(book);
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

    return (
        <div>
            <div className="bookPage">
                <BlurImage imgUrl={book.imgUrl} scrollY={scrollY} />
                <div className="bookPage__baseInf">
                    <p className="bookPage__baseInf__name">{book.name}</p>
                    <p className="bookPage__baseInf__author">{book.author}</p>
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
                    <p>Dodane przez: {book.addedBy}</p>
                </footer>
            </div>
        </div>
    )
}
