import React from 'react'

const Cat = (props) => {
	return (
		<li class="cat-box">
			<img class="cat-image" src={props.image} />
		</li>
	)
}

export default Cat
