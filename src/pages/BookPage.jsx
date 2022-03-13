import { useState, useLayoutEffect, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'

import BlurImage from "../layouts/BookPage/BlurImage"
import Content from "../layouts/BookPage/Content"

export default function BookPage() {
    const books = useSelector(state => state.books)
    const [book, setBook] = useState({})
    const [scrollY, setScrollY] = useState(0)
    const { bookId } = useParams()

    useLayoutEffect(() => {
        const filteredBook = [...books].filter(book => book.id === parseInt(bookId))
        setBook(filteredBook[0])
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        window.addEventListener('scroll', (e) => {
            setScrollY(window.scrollY)
        })
    }

    return (
        <div style={{
            backgroundColor: '#000',
        }}>
            <BlurImage imgUrl={book.imgUrl} scrollY={scrollY} />
            <Content title={book.name} author={book.author} description={book.description} />
        </div>
    )
}
