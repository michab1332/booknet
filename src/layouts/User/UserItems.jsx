import { useNavigate } from 'react-router-dom'

import '../../assets/styles/CategoryBookSection.css'

import BookItem from '../../components/BookItem'

export default function UserItems({ text, data = [], buttonText }) {
    const navigate = useNavigate()
    const goToBookPage = (id) => {
        navigate(`book/${id}`)
    }

    return (
        <div className="categoryBookSection">
            <p className="categoryBookSection__title">{text}</p>
            <div className="categoryBookContainer__booksContainer">
                <div className="user__button">
                    <p className="user__button__text">{buttonText}</p>
                </div>
                {data.map(book => {
                    return <BookItem onClick={() => goToBookPage(book.id)} src={book.imgUrl} alt={book.name} key={book.id} />
                })}
            </div>
        </div>
    )
}