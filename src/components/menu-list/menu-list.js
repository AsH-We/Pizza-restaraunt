import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuCatched } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
	componentDidMount() {
		this.props.menuRequested();
		
		const { RestoService } = this.props;
		RestoService.getMenuItems()
			.then(res => this.props.menuLoaded(res))
			.catch(() => this.props.menuCatched())
	}
	
    render() {
		const { menuItems, loading, error } = this.props;

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
						return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
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
	menuLoaded,
	menuRequested,
	menuCatched
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));