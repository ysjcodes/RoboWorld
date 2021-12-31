import React from 'react';

const Card = ({name,email,id}) => {
	return (
			<div className="tc bg-lightest-blue dib ma2 br3 pa3 grow bw2 shadow-5">
				<img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
}

export default Card;