import React from 'react'

const SearchBar = (props) => {

	const filterText = props.filterText;

    const handleFilterTextChange = (e) => {
        props.onFilterTextChange(e.target.value);
    };

    return (
        <>
            <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search" value={filterText} onChange={handleFilterTextChange} />
                <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
                </span>
            </p>            
        </>
    )
}

export default SearchBar
