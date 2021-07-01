import React from 'react';
import styled from 'styled-components';
import './menu-list-item.scss';
import pizza from './pizza-icon.png';
import pasta from './pasta-icon.png';
import meat from './meat-icon.png';
import salad from './salad-icon.png';

const Icon = styled.img`
	max-width: 100px;
	height: 100px;
`;
const Flex = styled.div`
	display: flex;
	justify-content: space-around;
`;

const MenuListItem = ({ menuItem }) => {
	const { title, url, category, price } = menuItem;
	let iconCategory;

	switch(category) {
		case 'meat':
			iconCategory = meat;
			break;
		case 'pasta':
			iconCategory = pasta;
			break;
		case 'pizza':
			iconCategory = pizza;
			break;
		case 'salads':
			iconCategory = salad;
			break;
		default: 
			break;
	}
	
    return (
		<li className="menu__item">
			<div className="menu__title">{title}</div>
			<div className="menu__blockimg">
				<img className="menu__img" src={url} alt={title}></img>
			</div>
			<Flex>
				<div>
					<div className="menu__category">
						Category: <span>{category}</span>
					</div>
					<div className="menu__price">Price: <span>{price}$</span></div>
					<button className="menu__btn">Add to cart</button>
				</div>
				<Icon src={iconCategory} alt={`${category} icon`} />
			</Flex>
		</li>
    )
}

export default MenuListItem;