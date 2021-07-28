import React from 'react'

const RepositoryTable = ({ repositories }) => {
    return (
        <>
            <a className="panel-block is-active">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                {repositories[0].name}
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                {repositories[1].name}
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                {repositories[2].name}
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                {repositories[3].name}
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-code-branch" aria-hidden="true"></i>
                </span>
                {repositories[4].name}
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-code-branch" aria-hidden="true"></i>
                </span>
                {repositories[5].name}
            </a>
            <div className="panel-block">
                    <button className="button is-link is-outlined is-fullwidth">
                        Reset all filters
                    </button>
                </div>            
        </>
    )
}

export default RepositoryTable
