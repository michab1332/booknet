import { useSelector } from 'react-redux';

import ProposedBookSection from '../layouts/Home/ProposedBookSection';
import CategoryBookSection from '../layouts/Home/CategoryBookSection';

const sortTab = [{
    id: 1,
    text: "Popularne w serwisie Readme",
    sortBy: ["fantasy", "Thriller"]
},
{
    id: 2,
    text: "Top 10 książek dzisiaj",
    sortBy: ["fantasy"]
},
{
    id: 3,
    text: "Nowości",
    sortBy: ["fantasy"]
},
{
    id: 4,
    text: "Horror",
    sortBy: ["Thriller"]
},
{
    id: 5,
    text: "Najlepiej oceniane",
    sortBy: ["Thriller"]
}]

export default function HomePage() {
    const books = useSelector(state => state.books);
    // const { currentUser } = useSelector(state => state.userAuth)
    return (
        <>
            <ProposedBookSection bookData={books[0]} />
            {sortTab.map(item => {
                return <CategoryBookSection text={item.text} categories={[...item.sortBy]} key={item.id} />
            })}
        </>
    )
}
