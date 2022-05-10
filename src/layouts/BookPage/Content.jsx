import { useNavigate } from "react-router-dom"

import Button from "../../components/Button"

import "../../assets/styles/Content.css"

export default function Content({ pdfUrl, author, title, description }) {
    const navigate = useNavigate()
    const goToReadingPage = () => {
        navigate('/reading', { state: { pdfUrl } })
    }
    return (
        <div className='contentContainer'>
            <div className="contentContainer__buttonWrapper">
                <Button onClick={goToReadingPage} text="Czytaj" large />
                <div className="contentContainer__buttonWrapper__bottom">
                    <Button text="Dodaj do ulubionych" large outline />
                    <Button text="PDF" small outline />
                </div>
            </div>
            <div className="contentContainer__description">
                <div className="contentContainer__description__booksInf">
                    <p className="contentContainer__description__booksInf__author">{title}</p>
                    <p className="contentContainer__description__booksInf__title">{author}</p>
                </div>
                <p className="contentContainer__description__title">Opis</p>
                <p className="contentContainer__description__text">
                    {description}
                </p>
            </div>
        </div>
    )
}
