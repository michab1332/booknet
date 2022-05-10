import '../../assets/styles/SearchPage.css'

export default function SearchBar({ inputValue, setInputValue }) {
    return (
        <div className='containerSB'>
            <input className='containerSB__searchBar' type="text" placeholder="search books..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}
