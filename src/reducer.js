export const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'CLOSE_ALERT':
			return {
				...state,
				alertName: '',
			};
		case 'REMOVE_ORDER':
			if (payload.quantity === 1) {
				return {
					...state,
					order: state.order.filter((el) => el.id !== payload.id),
				};
			} else if (payload.quantity > 1) {
				return {
					...state,
					order: state.order.map((el) => {
						if (el.id === payload.id) {
							return {
								...el,
								quantity: el.quantity - 1,
							};
						} else {
							return el;
						}
					}),
				};
			}
		//eslint-disable-next-line
		case 'ADD_QUANTITY':
			return {
				...state,
				order: state.order.map((el) => {
					if (el.id === payload.id) {
						return {
							...el,
							quantity: el.quantity + 1,
						};
					} else {
						return el;
					}
				}),
			};
		case 'IS_OPEN_CART':
			return {
				...state,
				isOpenCart: !state.isOpenCart,
			};
		case 'ADD_ORDER': {
			const itemIndex = state.order.findIndex(
				(el) => el.id === payload.item.id
			);

			let newOrder = null;
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				};
				newOrder = [...state.order, newItem];
			} else {
				newOrder = state.order.map((orderItem, index) => {
					if (index === itemIndex) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1,
						};
					} else {
						return orderItem;
					}
				});
			}
			return {
				...state,
				order: newOrder,
				alertName: payload.name,
			};
		}
		case 'IS_FINAL_ORDER':
			return {
				...state,
				isFinal: !state.isFinal,
			};
		//eslint-disable-next-line
		default:
			return state;
	}
};
