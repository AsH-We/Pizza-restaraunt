const menuLoaded = (newMenu) => {
	return { 
		type: 'MENU_LOADED', 
		payLoad: newMenu 
	}
}

export { menuLoaded };
