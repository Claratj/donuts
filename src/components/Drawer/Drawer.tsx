import React from 'react'
import { NavLink } from 'react-router-dom'
import { DONUTS_ROUTE } from 'routes/routes'

export default function Drawer() {
	return (
		<aside>
			<nav>
				<NavLink to={DONUTS_ROUTE}>

				</NavLink>
			</nav>
		</aside>
	)
}
