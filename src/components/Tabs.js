import React from 'react';

const Tabs = (props) => {
	const filterTab = props.filterTab;

    const handleFilterTabChange = (e, filterTab) => {
        e.preventDefault();
        props.onFilterTabChange(filterTab)
    };

	return (
		<>
			<a
				className={filterTab === 'All' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'All')}
			>
				All
			</a>
			<a
				className={filterTab === 'Public' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'Public')}
			>
				Public
			</a>
			<a
				className={filterTab === 'Private' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'Private')}
			>
				Private
			</a>
			<a
				className={filterTab === 'Sources' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'Sources')}
			>
				Sources
			</a>
			<a
				className={filterTab === 'Forks' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'Forks')}
			>
				Forks
			</a>
		</>
	);
};

export default Tabs;
