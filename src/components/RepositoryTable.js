import React from 'react'

const RepositoryTable = () => {
    return (
        <>
            <a className="panel-block is-active">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                bulma
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                marksheet
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                minireset.css
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                jgthms.github.io
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-code-branch" aria-hidden="true"></i>
                </span>
                daniellowtw/infboard
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-code-branch" aria-hidden="true"></i>
                </span>
                mojs
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
