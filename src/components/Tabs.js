import React, { useState } from 'react';

const Tabs = (props) => {

	const [filterTab, setFilterTab] = useState(props.filterTab);

	return (
		<>
			<a className={ filterTab === 'All' ? 'is-active' : '' }>All</a>
			<a className={ filterTab === 'Public' ? 'is-active' : '' }>Public</a>
			<a className={ filterTab === 'Private' ? 'is-active' : '' }>Private</a>
			<a className={ filterTab === 'Sources' ? 'is-active' : '' }>Sources</a>
			<a className={ filterTab === 'Forks' ? 'is-active' : '' }>Forks</a>
		</>
	);
};

export default Tabs;
