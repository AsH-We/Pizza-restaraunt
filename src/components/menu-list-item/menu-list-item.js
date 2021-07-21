import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';
import pizza from './pizza-icon.png';
import pasta from './pasta-icon.png';
import meat from './meat-icon.png';
import salad from './salad-icon.png';

const Icon = styled.img`
	max-width: 80px;
	height: 80px;
`;
const Flex = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center
`;

const MenuListItem = ({ menuItem, onAddToCart }) => {
	const { url, title, category, price } = menuItem;

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
		<>
			<li className="menu__item">
				<div className="menu__title">{title}</div>
				<div className="menu__blockimg">
					<Link to={`/${menuItem.id}`}>
						<img className="menu__img" src={url} alt={title} />
					</Link>
				</div>
				<Flex>
					<div>
						<div className="menu__category">
							Category: <span>{category}</span>
						</div>
						<div className="menu__price">Price: <span>{price}$</span></div>
						<button 
							onClick={() => onAddToCart()} 
							className="menu__btn"
						>
							Add to cart
						</button>
					</div>
					<Icon src={iconCategory} alt={`${category} icon`} />
				</Flex>
			</li>
		</>
    )
}

export default MenuListItem;