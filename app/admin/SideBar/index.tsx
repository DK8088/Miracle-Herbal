import React from 'react'
import style from './style.module.css'

const SideBar = () => {
	
	const menus = [
		'Pages',
		'Products',
		'Orders',
		'Settings',
		'Contact Us',
	];

	return (
		<section className='sideBar'>
			<div className={style.SideBarWrap}>
				<ul className={style.SideBarMenuWrap}>
					{menus.length > 0 && menus.map( (item, index) => <li key={index}>{item}</li> )}
				</ul>
			</div>
		</section>
	)
}

export default SideBar