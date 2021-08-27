import React, { useState } from 'react';
import Tabs from './Tabs';
import RepositoryTable from './RepositoryTable';
import SearchBar from './SearchBar';

const FilterableRepositoryTable = () => {
	const repositories: { name: string; private: boolean; fork: boolean }[] = [
		{
			name: 'bulma',
			private: false, // public, private
			fork: false, // fork/source
		},
		{
			name: 'marksheet',
			private: false,
			fork: false,
		},
		{
			name: 'minireset.css',
			private: false,
			fork: false,
		},
		{
			name: 'jgthms.github.io',
			private: false,
			fork: false,
		},
		{
			name: 'daniellowtw/infboard',
			private: false,
			fork: true,
		},
		{
			name: 'mojs',
			private: false,
			fork: true,
		},
	];

    const [filterText, setFilterText] = useState<string>('');
	const [filterTab, setFilterTab] = useState<string>('All');

	const handleFilterTextChange = (filterText: string) => {
		setFilterText(filterText);
	};

	const handleFilterTabChange = (filterTab: string) => {
		setFilterTab(filterTab);
	};

	const handleResetButtonChange = () => {
		setFilterText('');
		setFilterTab('All');
	};

	return <nav className='panel'>
				<p className='panel-heading'>Repositories</p>
				<div className='panel-block'>
					<SearchBar
						filterText={filterText}
						onFilterTextChange={handleFilterTextChange}
					/>
				</div>
				<p className='panel-tabs'>
					<Tabs
						filterTab={filterTab}
						onFilterTabChange={handleFilterTabChange}
					/>
				</p>
				<RepositoryTable
					repositories={repositories}
					filterText={filterText}
					filterTab={filterTab}
					onResetButtonChange={handleResetButtonChange}					
				/>
    </nav>;
};

export default FilterableRepositoryTable;
