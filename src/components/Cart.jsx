const Cart = (props) => {
	const { quantity = 0 } = props;
	return (
		<div className="cart indigo darken-4 white-text">
			<i className='material-icons'>shopping_basket</i>
			{quantity ? <span className='cart-quantity'>{quantity}</span> : null}
		</div>
	);
};

export { Cart };
