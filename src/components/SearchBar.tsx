import { useState } from 'react'
import React from 'react'

interface SearchBarProps {
    handleSearch(e: React.FormEvent<HTMLFormElement>, searchTerm: string): void;
}

function SearchBar(props: SearchBarProps){
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
