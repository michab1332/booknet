import React from 'react'

import Header from '../../layouts/header/Header'
import SvgButton from '../../components/SvgButton';
import Button from '../../components/Button';

import '../../assets/styles/ProposedBookSection.css';

export default function ProposedBookSection() {
    return (
        <div className="proposedBookContainer" style={{
            backgroundImage: 'url("https://image.ceneostatic.pl/data/products/32692858/i-wiedzmin-1-ostatnie-zyczenie.jpg")',
        }}>
            <Header />
            <div className="proposedBookContainer__nav">
                <div className="proposedBookContainer__nav__navWrapper">
                    <SvgButton src={require('../../assets/svgs/Plus.svg').default} alt="plus icon" text="My books" />
                    <Button text="Czytaj" />
                    <SvgButton src={require('../../assets/svgs/inf.svg').default} alt="inf icon" text="Informations" />
                </div>
            </div>
        </div>
    )
}
