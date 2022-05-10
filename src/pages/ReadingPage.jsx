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

    return (
        <div className='documentContainer'>
            <Document className="documentContainer__document" file={DIRECTORY + state.pdfUrl} onLoadSuccess={onDocumentLoadSuccess} onLoadError={(err) => console.log(err)}>
                <Page className="documentContainer__page" pageNumber={pageNumber} />
            </Document>
        </div>
    )
}
