import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { Document, Page, pdfjs } from 'react-pdf'

import '../assets/styles/ReadingPage.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ReadingPage() {
    const { state } = useLocation()
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        if (isNaN(pageNumber)) {
            setPageNumber()
        }
    }, [pageNumber])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    const nextPageNumber = () => {
        if (pageNumber + 1 > numPages) return 0
        return 1
    }

    const previousPageNumber = () => {
        if (pageNumber - 1 === 0) return 0
        return 1
    }

    const handleChangePage = (option) => {
        const switchObject = {
            'next': () => setPageNumber(prevState => parseInt(prevState) + nextPageNumber()),
            'previous': () => setPageNumber(prevState => parseInt(prevState) - previousPageNumber()),
        }
        switchObject[option]()
    }

    const handleChangeInputValue = (e) => {
        setPageNumber(e.target.value)
    }

    return (
        <div className='documentContainer'>
            <Document className="documentContainer__document" file={state.pdfUrl} onLoadSuccess={onDocumentLoadSuccess} onLoadError={(err) => console.log(err)}>
                <Page className="documentContainer__page" pageNumber={parseInt(pageNumber)} />
            </Document>
            <nav className="documentContainer__navigation">
                <button onClick={() => handleChangePage('previous')} className="documentContainer__navigation__button">&lt;</button>
                <div className="documentContainer__navigation__wrapper">
                    <input className='documentContainer__navigation__input' type="text" value={pageNumber} onChange={(e) => handleChangeInputValue(e)} />
                    <p className="documentContainer__navigation__text">{numPages}</p>
                </div>
                <button onClick={() => handleChangePage('next')} className="documentContainer__navigation__button">&gt;</button>
            </nav>
        </div>
    )
}
