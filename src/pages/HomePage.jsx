import React from 'react'

import ProposedBookSection from '../layouts/Main/ProposedBookSection'
import CategoryBookSection from '../layouts/Main/CategoryBookSection'

const DATA = [
    {
        id: 1,
        name: 'Wiedzmin Sezon Burz',
        author: "Andrzej Sapkowski",
        imgUrl: 'https://s.lubimyczytac.pl/upload/books/199000/199630/490986-352x500.jpg',
        launguageVersion: 'polska',
        categories: ['fantasy', 'tego typu']
    },
    {
        id: 2,
        name: 'Ty Kochasz Mnie',
        author: "Caroline Kepnes",
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavJutkAo3ruDiorebd7BzrQDg0rUGPQxzb-9i_ItDjwOkW4iDcsookbXhubzIwtp6ZVQ&usqp=CAU',
    },
    {
        id: 3,
        name: 'It',
        author: "Stephen King",
        imgUrl: 'https://ecsmedia.pl/c/to-b-iext97106887.jpg',
    },
    {
        id: 4,
        name: 'Wiedzmin Sezon Burz',
        author: "Andrzej Sapkowski",
        imgUrl: 'https://s.lubimyczytac.pl/upload/books/199000/199630/490986-352x500.jpg',
    }
]

export default function HomePage() {
    return (
        <>
            <ProposedBookSection />
            <CategoryBookSection text="Popularne w serwisie Booknet" data={DATA} />
            <CategoryBookSection text="Popularne w serwisie Booknet" data={DATA} />
            <CategoryBookSection text="Popularne w serwisie Booknet" data={DATA} />
        </>
    )
}
