import React from 'react'

const SearchBar = () => {
    return (
        <>
            <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search" />
                <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
                </span>
            </p>            
        </>
    )
}

export default SearchBar
