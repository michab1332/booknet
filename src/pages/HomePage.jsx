import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store'

import ProposedBookSection from '../layouts/Main/ProposedBookSection'
import CategoryBookSection from '../layouts/Main/CategoryBookSection'

export default function HomePage() {
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()
    const { deleteBook } = bindActionCreators(actionCreators, dispatch)

    return (
        <>
            <ProposedBookSection bookData={books[1]} />
            <CategoryBookSection text="Popularne w serwisie Booknet" data={books} />
            <CategoryBookSection text="Najnowsze tytuły" data={books} />
            <CategoryBookSection text="Najlepiej oceniane" data={books} />
        </>
    )
}
