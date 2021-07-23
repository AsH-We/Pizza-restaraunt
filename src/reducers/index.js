const initialState = {
	menu: [],
	loading: true,
	error: false,
	cartItems: [],
	totalPrice: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {


		// ========================================================
		case 'MENU_LOADED':
			return {
				...state,
				menu: action.payload,
					loading: false
			};


			// ========================================================
		case 'MENU_REQUESTED':
			return {
				...state,
				loading: true
			};


			// ========================================================
		case 'MENU_ERROR':
			return {
				...state,
				loading: false,
					error: true
			};


			// ========================================================
		case 'ITEM_ADD_TO_CART':
			const id = action.payload;
			const itemIndex = state.cartItems.findIndex(item => item.id === id);

			if (itemIndex >= 0) {
				const itemInState = state.cartItems.find(item => item.id === id);
				const newCartItem = {
					...itemInState,
					quantity: ++itemInState.quantity
				};

				return {
					...state,
					cartItems: [
						...state.cartItems.slice(0, itemIndex),
						newCartItem,
						...state.cartItems.slice(itemIndex + 1)
					],
					totalPrice: state.totalPrice + itemInState.price
				};
			}

			const item = state.menu.find(item => item.id === id);
			const newCartItem = {
				title: item.title,
				price: item.price,
				url: item.url,
				id: item.id,
				quantity: 1
			};

			return {
				...state,
				cartItems: [
					...state.cartItems,
					newCartItem
				],
				totalPrice: state.totalPrice + item.price
			};


			// ========================================================
		case 'ITEM_REMOVE_FROM_CART':
			const idx = action.payload;
			const itemInx = state.cartItems.findIndex(item => item.id === idx);

			return {
				...state,
				cartItems: [
					...state.cartItems.slice(0, itemInx),
					...state.cartItems.slice(itemInx + 1)
				],
				totalPrice: state.totalPrice - (state.cartItems[itemInx].price * state.cartItems[itemInx].quantity)
			}



			// ========================================================
		default:
			return state;
	}
};

export default reducer;