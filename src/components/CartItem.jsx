const CartItem = (props) => {
    const {id, name,price, quantity}=props
	return (
        <li className='collection-item' key={id}>{name} x{quantity} = {price * quantity}
            <span className="secondary-content">
                <i className="material-icons close-icon">close</i>
        </span>
        </li>

	);
};

export { CartItem };
