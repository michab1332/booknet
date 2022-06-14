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
        readOn: {
            loading: true,
            data: []
        },
        top10: {
            loading: true,
            data: []
        },
        horrors: {
            loading: true,
            data: []
        },
        adventure: {
            loading: true,
            data: []
        },
        detective: {
            loading: true,
            data: []
        },
    });

    const { readOn, top10, horrors, adventure, detective } = state;

    useEffect(() => {
        //get started books(read on)
        getBooksByIds(currentUser.booksStarted).then(data => setState(prevState => ({
            ...prevState,
            readOn: {
                loading: false,
                data
            }
        })));

        //get adventure books
        getBooksByCategories(["fantasy", "adventure"]).then(data => setState(prevState => ({
            ...prevState,
            adventure: {
                loading: false,
                data
            }
        })));

        //get horrors books
        getBooksByCategories(["horror"]).then(data => setState(prevState => ({
            ...prevState,
            horrors: {
                loading: false,
                data
            }
        })));
    }, []);

    useEffect(() => {
        console.log(readOn)
    }, [state])

    return (
        <>
            {readOn.loading === true ? "loading..." : <ProposedBookSection bookData={readOn.data[0]} />}
            <CategoryBookSection text="Czytaj dalej" data={readOn.data} />
            {/* <CategoryBookSection text="Top 10 książek dzisiaj" data={books} /> */}
            <CategoryBookSection text="Horrory" data={horrors.data} />
            <CategoryBookSection text="Fantastyczne przygody" data={adventure.data} />
            {/* <CategoryBookSection text="Poczuj się jak detektyw" data={books} /> */}
        </>
    );
}
