import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getBooksByCategories from '../firebase/getBooksByCateogries';
import getBooksByIds from '../firebase/getBooksByIds';

import ProposedBookSection from '../layouts/Home/ProposedBookSection';
import CategoryBookSection from '../layouts/Home/CategoryBookSection';

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

    const getBooksByCategoriesFromFirebase = (categories, categoryName) => {
        getBooksByCategories([...categories]).then(data => setState(prevState => ({
            ...prevState,
            [categoryName]: {
                loading: false,
                data
            }
        })))
    }

    const getBooksByIdsFromFirebase = (ids, name) => {
        getBooksByIds(ids).then(data => setState(prevState => ({
            ...prevState,
            [name]: {
                loading: false,
                data
            }
        })));
    }

    useEffect(() => {
        //get books by ids
        //get started books(read on)
        getBooksByIdsFromFirebase(currentUser.booksStarted, "readOn");

        //get books by categories
        getBooksByCategoriesFromFirebase(["fantasy", "adventure"], "adventure");
        getBooksByCategoriesFromFirebase(["horror"], "horrors");
    }, []);

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
