import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuError, addedToCart } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
	componentDidMount() {
		this.props.menuRequested();
		
		const { RestoService } = this.props;
		RestoService.getMenuItems()
			.then(res => this.props.menuLoaded(res))
			.catch(error => this.props.menuError())
	}
	
    render() {
		const { menuItems, loading, error, addedToCart } = this.props;

		if (loading) {
			return <Spinner />
		}

		if (error) {
			return <Error />
		}
		
        return (
			<ul className="menu__list">
				{
					menuItems.map(menuItem => {
						return <MenuListItem 
									key={menuItem.id} 
									menuItem={menuItem} 
									onAddToCart={() => addedToCart(menuItem.id)}
								/>
					})	
				}
			</ul>
        )
    }
};

const mapStateToProps = (state) => {
	return {
		menuItems: state.menu,
		loading: state.loading,
		error: state.error
	}
};

const mapDispatchToProps = {
	menuLoaded: menuLoaded,
	menuRequested,
	menuError,
	addedToCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));