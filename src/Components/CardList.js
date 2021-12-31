import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const CardListComponent = robots.map(
			(robot,i) => <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
		);  
	return (
			<div>
				{CardListComponent}
			</div>
		);
}

export default CardList;