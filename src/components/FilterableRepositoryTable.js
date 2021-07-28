import React from 'react';
import SearchBar from './SearchBar';
import Tabs from './Tabs';
import RepositoryTable from './RepositoryTable';

const FilterableRepositoryTable = () => {
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
