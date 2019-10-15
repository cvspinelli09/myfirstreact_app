import React from 'react';
import './Card.css';

const Card = (props) => {
	const { name, username, email, id } = props;
	return (
		<div class="tc bg-light-blue dib br1 pa2 ma2 grow bw5 shadow-5">
			<img
				alt="robots" 
				src={`https://avatars.dicebear.com/v2/bottts/${id}.svg?200x200`} />
			<div>
				<h2>{name}</h2>
				<h3>{username}</h3>
				<p>{email}</p>
			</div>
		</div>
	);
}


export default Card;