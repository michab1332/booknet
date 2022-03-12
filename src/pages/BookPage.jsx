import { useState, useLayoutEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'

import BlurImage from "../layouts/BookPage/BlurImage"
import Content from "../layouts/BookPage/Content"

export default function BookPage() {
    const books = useSelector(state => state.books)
    const [book, setBook] = useState({})
    const { bookId } = useParams()

    useLayoutEffect(() => {
        const filteredBook = [...books].filter(book => book.id === parseInt(bookId))
        setBook(filteredBook[0])
    }, [])

    return (
        <div style={{
            backgroundColor: '#000',
        }}>
            <BlurImage imgUrl={book.imgUrl} />
            <Content description={book.description} />
        </div>
    )
}
