import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isOpenCart: false,
	alertName: '',
};

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' });
	};

	value.removeOrder = (id, quantity) => {
		dispatch({ type: 'REMOVE_ORDER', payload: { id, quantity } });
    };
    
    value.addQuantity = (itemId) => {
        dispatch({type:'ADD_QUANTITY',payload:{id:itemId}})
    }

    value.handleOpenCart = () => {
        dispatch({type:'IS_OPEN_CART'})
    }

    value.addOrder = (item) => {
        dispatch({type:'ADD_ORDER', payload:{item}})
	}
	
	value.handleFinalOrder = () => {
        dispatch({type:'IS_FINAL_ORDER'})
    }

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
