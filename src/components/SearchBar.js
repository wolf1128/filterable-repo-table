import React, { useState } from 'react'

const SearchBar = (props) => {

	const [filterText, setFilterText] = useState(props.filterText);


    return (
        <>
            <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search" value={filterText} />
                <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
                </span>
            </p>            
        </>
    )
}

export default SearchBar
