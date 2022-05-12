import { useState } from 'react'
import { useLocation } from "react-router-dom"
import { Document, Page, pdfjs } from 'react-pdf'

import '../assets/styles/ReadingPage.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DIRECTORY = "http://localhost:3000/pdf/";

export default function ReadingPage() {
    const { state } = useLocation()
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

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
            'next': () => setPageNumber(prevState => prevState + nextPageNumber()),
            'previous': () => setPageNumber(prevState => prevState - previousPageNumber()),
        }
        switchObject[option]()
    }

    return (
        <div className='documentContainer'>
            <Document className="documentContainer__document" file={DIRECTORY + state.pdfUrl} onLoadSuccess={onDocumentLoadSuccess} onLoadError={(err) => console.log(err)}>
                <Page className="documentContainer__page" pageNumber={pageNumber} />
            </Document>
            <nav className="documentContainer__navigation">
                <button onClick={() => handleChangePage('previous')} className="documentContainer__navigation__button">&lt;</button>
                <p className="documentContainer__navigation__pages">{pageNumber} / {numPages}</p>
                <button onClick={() => handleChangePage('next')} className="documentContainer__navigation__button">&gt;</button>
            </nav>
        </div>
    )
}
