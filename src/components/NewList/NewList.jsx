import React from 'react'
import './NewList.scss'
import NewsItem from '../NewsItem/NewsItem'

const NewList = ({ news }) => {
	return (
		<ul className="list">
			{news.map((item) => (
				<NewsItem key={item.id} item={item} />
			))}
		</ul>
	)
}

export default NewList
