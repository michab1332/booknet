import { useState, useLayoutEffect, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import getBookById from "../firebase/getBookById";

import BlurImage from "../layouts/BookPage/BlurImage";
import Content from "../layouts/BookPage/Content";

export default function BookPage() {
    const [book, setBook] = useState({});
    const [scrollY, setScrollY] = useState(0);
    const { bookId } = useParams();
    const { state } = useLocation();

    useLayoutEffect(() => {
        // getBookById(bookId).then(book => {
        //     setBook(book);
        // })
        setBook(state.bookData)
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
        <div style={{
            backgroundColor: '#000',
        }}>
            <BlurImage imgUrl={book.imgUrl} scrollY={scrollY} />
            <Content pdfUrl={book.pdfUrl} title={book.name} author={book.author} description={book.description} />
        </div>
    )
}
