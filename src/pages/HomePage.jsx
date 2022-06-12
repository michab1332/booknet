import { useSelector } from 'react-redux';

import ProposedBookSection from '../layouts/Home/ProposedBookSection';
import CategoryBookSection from '../layouts/Home/CategoryBookSection';

const sortTab = [{
    text: "Popularne w serwisie Readme",
    sortBy: ["fantasy", "Thriller"]
},
{
    text: "Top 10 książek dzisiaj",
    sortBy: ["fantasy"]
},
{
    text: "Nowości",
    sortBy: ["fantasy"]
},
{
    text: "Horror",
    sortBy: ["Thriller"]
},
{
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
                return <CategoryBookSection text={item.text} categories={[...item.sortBy]} />
            })}
        </>
    )
}
