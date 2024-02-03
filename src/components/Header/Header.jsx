import React from 'react'
import { formatDate } from '../../helpers/formatDate'
import './Header.scss'

const Header = () => {
	return (
		<>
			<header className="header">
				<h1 className="title">NEWS REACT</h1>
				<p className="date">{formatDate(new Date())}</p>
			</header>
		</>
	)
}

export default Header
