import { useState } from 'react'

import SearchBar from "../layouts/SearchPage/SearchBar"

export default function SearchPage() {
    const [value, setValue] = useState("")
    return (
        <div style={{
            backgroundColor: "#000",
            width: "100%"
        }}>
            <SearchBar inputValue={value} setInputValue={setValue} />
        </div>
    )
}
