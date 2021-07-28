import React from 'react';
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

	return (
		<>
			<nav className='panel'>
				<p className='panel-heading'>Repositories</p>
				<div className='panel-block'>
					<SearchBar />
				</div>
				<p className='panel-tabs'>
					<Tabs />
				</p>
				<RepositoryTable
					repositories={[
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
					]}
				/>
			</nav>
		</>
	);
};

export default FilterableRepositoryTable;
