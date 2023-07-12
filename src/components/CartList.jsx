import { useContext } from 'react';
import { ShopContext } from '../context';
import { CartItem } from './CartItem';

const CartList = () => {
	const {
		order = [],
		handleOpenCart,
		handleFinalOrder,
	} = useContext(ShopContext);
	console.log(order);
	const totalPrice = order.reduce((sum, item) => {
		return sum + item.price * item.quantity;
	}, 0);
	return (
		<ul className="collection with-header cart-list">
			<li className="collection-header">
				<h4>
					In Cart
					<span className="secondary-content close-icon">
						<i className="material-icons" onClick={handleOpenCart}>
							close
						</i>
					</span>
				</h4>
			</li>
			{order.length ? (
				order.map((item) => <CartItem key={item.id} {...item} />)
			) : (
				<li className="collection-item">Корзина пуста</li>
			)}
			<li className="collection-item active">
				Общая стоимость: {totalPrice}
				<button
					className="secondary-content btn order"
					onClick={handleFinalOrder}
				>
					Оформить заказ
				</button>
			</li>
		</ul>
	);
};

export { CartList };
