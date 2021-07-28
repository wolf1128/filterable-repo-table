import React from 'react';
import RepositoryRow from './RepositoryRow';

const RepositoryTable = (props) => {
	const filterText = props.filterText;
	const filterTab = props.filterTab;

	const rows = [];

	props.repositories.forEach((repo) => {
		if (repo.name.indexOf(filterText) === -1) {
			return;
		}
		if (!filterTab) {
			return;
		}
        

		rows.push(
            <RepositoryRow 
                repository={repo} 
                key={repo.name} 
            />);
	});
	return (
		<>
            {rows}
			<div className='panel-block'>
				<button className='button is-link is-outlined is-fullwidth'>
					Reset all filters
				</button>
			</div>
		</>
	);
};

export default RepositoryTable;
