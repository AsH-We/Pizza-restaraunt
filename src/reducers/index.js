const initialState = {
	menu: [],
	loading: true,
	error: false,
	cartItems: []
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
			const item = state.menu.find(item => item.id === id);
			const newCartItem = {
				title: item.title,
				price: item.price,
				url: item.url,
				id: item.id
			};

			return {
				...state,
				cartItems: [
					...state.cartItems,
					newCartItem
				]
			};


			// ========================================================
		case 'ITEM_REMOVE_FROM_CART':
			const idx = action.payload;
			const itemIndex = state.cartItems.findIndex(item => item.id === idx);
			
			return {
				...state,
				cartItems: [
					...state.cartItems.slice(0, itemIndex),
					...state.cartItems.slice(itemIndex + 1)
				]
			}



			default:
				return state;
	}
};

export default reducer;