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
        case 'ADD_QUANTITY':
            return {
                ...state,
                order:state.order.map((el) => {
                    if (el.id === payload.id) {
                        return {
                            ...el,
                            quantity: el.quantity + 1,
                        };
                    } else {
                        return el;
                    }
                }),
            }
        case 'IS_OPEN_CART':
            return {
                ...state,
                isOpenCart:!state.isOpenCart
            }
        case 'ADD_ORDER':
            const itemIndex = state.order.findIndex((el) => el.id === payload.item.id);
            if (itemIndex < 0) {
                return {
                    ...state,
                    quantity: 1,
                };
            }
        
                //eslint-disable-next-line
		default:
			return state;
	}
};
