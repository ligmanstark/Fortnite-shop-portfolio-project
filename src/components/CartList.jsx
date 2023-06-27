import { CartItem } from './CartItem';

const CartList = (props) => {
	const { order = [], handleOpenCart = Function.prototype } = props;
	const totalPrice = order.reduce((sum, item) => {
		return sum + item.price * item.quantity;
	}, 0);
	return (
		<ul className='collection with-header cart-list'>
			<li className='collection-header'>
				<h4>
					In Cart
					<span className='secondary-content close-icon'>
						<i
							className='material-icons'
							onClick={handleOpenCart}
						>
							close
						</i>
					</span>
				</h4>
			</li>
			{order.length ? (
				order.map((item) => (
					<CartItem
						key={item.id}
						{...item}
					/>
				))
			) : (
				<li className='collection-item'>Корзина пуста</li>
			)}
			<li className='collection-item active'>Общая стоимость: {totalPrice}</li>
		</ul>
	);
};

export { CartList };
