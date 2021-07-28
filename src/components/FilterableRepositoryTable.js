import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Tabs from './Tabs';
import RepositoryTable from './RepositoryTable';

const FilterableRepositoryTable = () => {
	// STEP#3 Identify the minimal (but complete) Representational of UI State:
	// #3/1 pieces of data in the application:
	// - The original list of repositories  =Ask-Question=It passes as porps.=> So it isn't a STATE.
	// - The search text the user entered   =Ask-Question=It can be changed over time.=> So it is a STATE.
	// - The value of tab filter            =Ask-Question=It can be changed over time.=> So it is a STATE.
	// - The filtered list of repos         =Ask-Question=It can be computed by combining the original repos list and value of tab filter and search text. => So it isn't a STATE.
	// #3/2 States identification
	// * Questions:
	// 1. Is it passed in from a parent via props? If so, it probably isn’t state.
	// 2. Does it remain unchanged over time? If so, it probably isn’t state.
	// 3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

	// STEP#4 Identify Where Your State Should Live
	// #4/1 Strategy:
	// - Identify every component that renders something based on that state
	// - Find a common owner component
	// - Either the common owner or another component higher up in the hierarchy should own the state
	// - If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.
	// #4/2 Identification:
	// RepositoryTable needs to filter the product list based on the state and value of tabs filter and SearchBar needs to display the search text
	// The common owner component is FilterableRepositoryTable .
	// It conceptually make sense for the filter text and filter tabs to live in FilterableRepositoryTable .

	const repositories = [
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

	const [filterText, setFilterText] = useState('');
	const [filterTab, setFilterTab] = useState('All');

	const handleFilterTextChange = (filterText) => {
		setFilterText(filterText);
	};

	const handleFilterTabChange = (filterTab) => {
		setFilterTab(filterTab);
	};

	return (
		<>
			<nav className='panel'>
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
				/>
			</nav>
		</>
	);
};

export default FilterableRepositoryTable;
