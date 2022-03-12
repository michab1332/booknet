import Button from "../../components/Button"

import "../../assets/styles/Content.css"

export default function Content({ description }) {
    return (
        <div className='contentContainer'>
            <div className="contentContainer__buttonWrapper">
                <Button text="Czytaj" large />
                <div className="contentContainer__buttonWrapper__bottom">
                    <Button text="Dodaj do ulubionych" large outline />
                    <Button text="PDF" small outline />
                </div>
            </div>
            <div className="contentContainer__description">
                <p className="contentContainer__description__title">Opis</p>
                <p className="contentContainer__description__text">
                    {description}
                </p>
            </div>
        </div>
    )
}
