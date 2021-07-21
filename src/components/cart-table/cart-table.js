import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions';
import './cart-table.scss';

const CartTable = ({ cartItems, deleteFromCart }) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
					cartItems.map(item => {
						const { id, title, url, price } = item;

						return (
							<div key={id} className="cart__item">
								<img src={url} className="cart__item-img" alt={title}></img>
								<div className="cart__item-title">{title}</div>
								<div className="cart__item-price">{price}$</div>
								<div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
							</div>
						)
					})
				}
            </div>
        </>
    );
};

const mapStateToProps = ({ cartItems }) => {
	return {
		cartItems
	}
};

const mapDispatchToProps = {
	deleteFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);