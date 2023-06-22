const GoodsItem = (props) => {
	const {
		id,
		name,
		description,
		type,
		price,
		priceNoDiscount,
		image,
		icon,
		rarity,
		full_background,
	} = props;
	return (
		<div className='card' id={id}>
			<div className='card-image'>
                <img src={icon} alt={name} />
            </div>
            <span className='card-title'>{name}</span>

			<div className='card-content'>
				<p>
					{description}
				</p>
			</div>
			<div className='card-action'>
                <button className='btn'>Купить</button>
                <span className="right price">{price} Р</span>
			</div>
		</div>
	);
};

export {GoodsItem}