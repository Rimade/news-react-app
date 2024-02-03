import React from 'react'
import './Image.scss'

const Image = ({ image }) => {
	return (
		<div className="wrapper-image">
			{image ? <img src={image} alt="news" className="image" /> : null}
		</div>
	)
}

export default Image
