import { useSelector, useDispatch } from 'react-redux'
import { getItemsInit } from '../store/actions/books'

import ProposedBookSection from '../layouts/Main/ProposedBookSection'
import CategoryBookSection from '../layouts/Main/CategoryBookSection'

export default function HomePage() {
    const books = useSelector(state => state.books)
    // const { currentUser } = useSelector(state => state.userAuth)
    const dispatch = useDispatch()

    dispatch(getItemsInit())

    return (
        <>
            <ProposedBookSection bookData={books[0]} />
            <CategoryBookSection text="Popularne w serwisie Readme" data={books} />
            <CategoryBookSection text="Najnowsze tytuły" data={books} />
            <CategoryBookSection text="Najlepiej oceniane" data={books} />
        </>
    )
}
