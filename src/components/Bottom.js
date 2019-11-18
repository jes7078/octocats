import React from 'react'

const Bottom = (props) => {
	return (
		<li class="bottom-box">
			<section class="bottomOfPic">
				<h2>{props.name}</h2>
				<img class="people-image" src={props.image2} />
			</section>
		</li>
	)
}

export default Bottom
