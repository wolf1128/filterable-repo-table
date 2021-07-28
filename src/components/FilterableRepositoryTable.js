import React from 'react';
import SearchBar from './SearchBar';
import Tabs from './Tabs';
import RepositoryTable from './RepositoryTable';

const FilterableRepositoryTable = () => {
    return (
        <>
            <nav className="panel">
                <p className="panel-heading">
                    Repositories
                </p>
                <div className="panel-block">
                    <SearchBar />
                </div>
                <p className="panel-tabs">
                    <Tabs />
                </p>
                <RepositoryTable />
            </nav>            
        </>
    )
}

export default FilterableRepositoryTable
