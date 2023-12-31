import { useContext } from 'react';
import { ShopContext } from '../context';

const CartItem = (props) => {
	const { id, name, price, quantity } = props;
	const {
		removeOrder = Function.prototype,
		addQuantity = Function.prototype,
	} = useContext(ShopContext);

	return (
		<li className="collection-item" key={id}>
			{name} x{quantity} = {price * quantity}
			<span
				className="secondary-content"
				onClick={() => removeOrder(id, quantity)}
			>
				{quantity > 1 ? (
					<i className="material-icons close-icon">exposure_neg_1</i>
				) : (
					<i className="material-icons close-icon">close</i>
				)}
			</span>
			<span className="secondary-content" onClick={() => addQuantity(id)}>
				<i className="material-icons close-icon">exposure_plus_1</i>
			</span>
		</li>
	);
};

export { CartItem };
