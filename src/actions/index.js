const menuLoaded = (newMenu) => {
	return {
		type: 'MENU_LOADED',
		payload: newMenu 
	}
};
const menuRequested = () => {
	return {
		type: 'MENU_REQUESTED'
	}
};
const menuCatched = () => {
	return {
		type: 'MENU_CATCHED'
	}
};

export { menuLoaded, menuRequested, menuCatched };
