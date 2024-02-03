import React from 'react'
import Image from '../Image/Image'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import './NewsBanner.scss'

const NewsBanner = ({ item }) => {
	return (
		<>
			<div className="banner">
				<Image image={item?.image} />
				<h3 className="title">{item.title}</h3>
				<p className="extra">
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</>
	)
}

export default NewsBanner
