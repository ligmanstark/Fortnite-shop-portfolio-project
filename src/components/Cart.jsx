import { useContext } from 'react';
import { ShopContext } from '../context';
const Cart = () => {
	const { order, handleOpenCart = Function.prototype } =
		useContext(ShopContext);
	const quantity = order.length;
	return (
		<div className="cart indigo darken-4 white-text" onClick={handleOpenCart}>
			<i className="material-icons">shopping_basket</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	);
};

export { Cart };
