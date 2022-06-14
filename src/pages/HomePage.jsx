import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getBooksByCategories from '../firebase/getBooksByCateogries';
import getBooksByIds from '../firebase/getBooksByIds';

import ProposedBookSection from '../layouts/Home/ProposedBookSection';
import CategoryBookSection from '../layouts/Home/CategoryBookSection';

// const sortTab = [{
//     id: 1,
//     text: "Popularne w serwisie Readme",
//     sortBy: ["fantasy", "Thriller"]
// },
// {
//     id: 2,
//     text: "Top 10 książek dzisiaj",
//     sortBy: ["fantasy"]
// },
// {
//     id: 3,
//     text: "Nowości",
//     sortBy: ["fantasy"]
// },
// {
//     id: 4,
//     text: "Horror",
//     sortBy: ["Thriller"]
// },
// {
//     id: 5,
//     text: "Najlepiej oceniane",
//     sortBy: ["Thriller"]
// }]
//categorybooksection bedzie tylko i wylacznie przyjmowac dane, nie bedzie na nie wplywac ani ich wywolywac -> jutro to zmienezz 
export default function HomePage() {
    const { currentUser } = useSelector(state => state.userAuth);
    const [state, setState] = useState({
        readOn: [],
        top10: [],
        horrors: [],
        adventure: [],
        detective: []
    });

    const { readOn, top10, horrors, adventure, detective } = state;

    useEffect(() => {
        //get started books(read on)
        getBooksByIds(currentUser.booksStarted).then(data => setState(prevState => ({
            ...prevState,
            readOn: data
        })));

        //get adventure books
        getBooksByCategories(["fantasy", "adventure"]).then(data => setState(prevState => ({
            ...prevState,
            adventure: data
        })));

        //get horrors books
        getBooksByCategories(["horror"]).then(data => setState(prevState => ({
            ...prevState,
            horrors: data
        })));
    }, []);

    return (
        <>
            {readOn.length === 0 ? "loading..." : <ProposedBookSection bookData={readOn[0]} />}
            <CategoryBookSection text="Czytaj dalej" data={readOn} />
            {/* <CategoryBookSection text="Top 10 książek dzisiaj" data={books} /> */}
            <CategoryBookSection text="Horrory" data={horrors} />
            <CategoryBookSection text="Fantastyczne przygody" data={adventure} />
            {/* <CategoryBookSection text="Poczuj się jak detektyw" data={books} /> */}
        </>
    );
}
