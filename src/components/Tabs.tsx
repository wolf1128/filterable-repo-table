import React from 'react'

interface TabsProps {
    filterTab: string;
    onFilterTabChange: (filterTab: string) => void;
}

const Tabs = (props: TabsProps) => {

    const filterTab = props.filterTab;

    const handleFilterTabChange = (e: React.MouseEvent<HTMLAnchorElement, Event>, filterTab: string) => { // NOTE: Do not use the DOM MouseEvent, use the React one!
        e.preventDefault();
        props.onFilterTabChange(filterTab)
    };

    return (
        <>
			<a
                href='/'
				className={filterTab === 'All' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'All')}
			>
				All
			</a>
			<a
                href='/'
				className={filterTab === 'Public' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'Public')}
			>
				Public
			</a>
			<a
                href='/'
				className={filterTab === 'Private' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'Private')}
			>
				Private
			</a>
			<a
                href='/'
				className={filterTab === 'Sources' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'Sources')}
			>
				Sources
			</a>
			<a
                href='/'
				className={filterTab === 'Forks' ? 'is-active' : ''}
				onClick={(e) => handleFilterTabChange(e, 'Forks')}
			>
				Forks
			</a>
        </>
    )
}

export default Tabs
