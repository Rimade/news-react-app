import React, { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { getNews } from '../../api/apiNews'
import NewList from '../../components/NewList/NewList'
import './Main.scss'

const Main = () => {
	const [news, setNews] = useState([])
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])
	return (
		<main className="main">
			{news.length > 0 && <NewsBanner item={news[3]} />}

			<NewList news={news} />
		</main>
	)
}

export default Main
