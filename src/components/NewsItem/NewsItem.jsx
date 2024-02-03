import React from 'react'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import './NewsItem.scss'

const NewsItem = ({ item }) => {
	return (
		<>
			<div className="item">
				<div
					className="wrapper"
					style={{ backgroundImage: `url(${item.image})` }}
				></div>
				<div className="info">
					<h3 className="title">{item.title}</h3>
					<p className="extra">
						{formatTimeAgo(item.published)} by {item.author}
					</p>
				</div>
			</div>
		</>
	)
}

export default NewsItem
