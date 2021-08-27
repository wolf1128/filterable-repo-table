import React from 'react'

interface RepositoryRowProps {
    repository: { name: string; private: boolean; fork: boolean };
}

const RepositoryRow = ({ repository }: RepositoryRowProps) => {
    const icon = repository.fork ? (
        <i className="bi bi-diagram-3" aria-hidden="true"></i>
    ) : (
        <i className="bi bi-book" aria-hidden="true"></i>
    );
    const name = repository.name;
    
    return (
        <>
            <a href='/' onClick={(e) => e.preventDefault() } className="panel-block"> {/* can be is-active */}
                <span className="panel-icon">
                    {icon}
                </span>
                    {name}
            </a>          
        </>
    )
}

export default RepositoryRow
