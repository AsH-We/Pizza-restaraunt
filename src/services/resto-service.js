export default class RestoService {
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    async getMenuItems() {
        return await this.getResource('/menu/');
    }

	async setOrder(order) {
		const number = await this.getOrderNumber();
		const newOrder = {
			id: number,
			order: order
		};

		const response = await fetch(`${this._apiBase}/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(newOrder)
		})
		if (!response.ok) {
			throw new Error('json Error')
		}
	}

	async getOrderNumber() {
		const res = await this.getResource('/orders/');
		const orderNumber = res.length + 1;

		return orderNumber;
	} 

	async deleteOrder(orderNumber) {
		const response = await fetch(`${this._apiBase}/orders`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: `${this._apiBase}/orders/${orderNumber}`
		})
		if (!response.ok) {
			throw new Error('json Error')
		}
	}
}