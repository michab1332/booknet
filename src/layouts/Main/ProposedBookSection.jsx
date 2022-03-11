import React from 'react'

import Header from '../../layouts/header/Header'
import SvgButton from '../../components/SvgButton';
import Button from '../../components/Button';

import '../../assets/styles/ProposedBookSection.css';

export default function ProposedBookSection({ bookData }) {
    const { name, imgUrl, description } = bookData
    const addToMyBooks = () => {
        console.log("added " + name)
    }
    const getInformations = () => {
        console.log(description)
    }
    return (
        <div className="proposedBookContainer" style={{
            backgroundImage: `url(${imgUrl})`,
        }}>
            <Header />
            <div className="proposedBookContainer__nav">
                <div className="proposedBookContainer__nav__navWrapper">
                    <SvgButton onClick={addToMyBooks} src={require('../../assets/svgs/Plus.svg').default} alt="plus icon" text="My books" />
                    <Button text="Czytaj" />
                    <SvgButton onClick={getInformations} src={require('../../assets/svgs/inf.svg').default} alt="inf icon" text="Informations" />
                </div>
            </div>
        </div>
    )
}
