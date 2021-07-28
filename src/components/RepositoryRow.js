import React from 'react'

const RepositoryRow = ({ repository }) => {

    const icon = repository.fork ? (
        <i className="bi bi-diagram-3" aria-hidden="true"></i>
    ) : (
        <i className="bi bi-book" aria-hidden="true"></i>
    );
    const name = repository.name;


    return (
        <>
            <a className="panel-block"> {/* can be is-active */}
                <span className="panel-icon">
                    {icon}
                </span>
                    {name}
            </a>          
        </>
    )
}

export default RepositoryRow
