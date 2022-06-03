import { useNavigate } from 'react-router-dom';

import Header from '../../layouts/Header/Header'
import SvgButton from '../../components/SvgButton';
import Button from '../../components/Button';

import '../../assets/styles/ProposedBookSection.css';

export default function ProposedBookSection({ bookData }) {
    const navigate = useNavigate()
    const { name, imgUrl, description, pdfUrl } = bookData
    const addToMyBooks = () => {
        console.log("added " + name)
    }
    const getInformations = () => {
        console.log(description)
    }
    const goToReadingPage = () => {
        navigate('/reading', { state: { pdfUrl } })
    }
    return (
        <div className="proposedBookContainer" style={{
            backgroundImage: `url(${imgUrl})`,
        }}>
            <Header />
            <div className="proposedBookContainer__nav">
                <div className="proposedBookContainer__nav__navWrapper">
                    <SvgButton onClick={addToMyBooks} src={require('../../assets/svgs/Plus.svg').default} alt="plus icon" text="My books" />
                    <Button onClick={goToReadingPage} text="Czytaj" />
                    <SvgButton onClick={getInformations} src={require('../../assets/svgs/inf.svg').default} alt="inf icon" text="Informations" />
                </div>
            </div>
        </div>
    )
}
