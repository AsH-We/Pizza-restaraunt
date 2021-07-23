import React from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { deleteFromCart } from '../../actions';
import './cart-table.scss';

const CartTable = ({ cartItems, deleteFromCart, RestoService }) => {
	let headingText;

	if (cartItems.length === 0) {
		headingText = "Заказов нет";
	} else if (cartItems.length <= 1) {
		headingText = "Ваш заказ:";
	} else {
		headingText = "Ваши заказы:"
	}
	
    return (
        <>
            <div className="cart__title">{headingText}</div>
            <div className="cart__list">
                {
					cartItems.map(item => {
						const { id, title, url, price, quantity } = item;

						return (
							<div key={id} className="cart__item">
								<img src={url} className="cart__item-img" alt={title}></img>
								<div className="cart__item-title">{title} ×{quantity}</div>
								<div className="cart__item-price">{price}$</div>
								<div onClick={() => {
									deleteFromCart(id);
								}} className="cart__close">&times;</div>
							</div>
						)
					})
				}
				<button onClick={e => {
					e.preventDefault();
					if (cartItems.length > 0) {
						RestoService.setOrder(generateOrder(cartItems))
							.then(() => {
								cartItems.map(item => {
									return item = {};
								});
								console.log(cartItems);
								
							})
					}
				}}>
					CHECKOUT
				</button>
            </div>
        </>
    );
};

const generateOrder = (items) => {
	const newOrder = items.map(item => {
		return {
			id: item.id,
			quantity: item.quantity
		}
	});

	return newOrder;
};

const mapStateToProps = ({ cartItems }) => {
	return {
		cartItems
	}
};

const mapDispatchToProps = {
	deleteFromCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));