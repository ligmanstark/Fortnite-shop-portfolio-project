const GoodsItem = (props) => {
	const {
		id,
		name,
		description,
		price,
		rarity,
		full_background,
		addOrder = Function.prototype,
	} = props;
	return (
		<div
			className='card'
			id={id}
		>
			<div className='card-image'>
				<img
					src={full_background}
					alt={name}
				/>
			</div>
			<span className='card-title rarity'>{rarity}</span>

			<div className='card-content'>
				<p>{description}</p>
			</div>
			<div className='card-action'>
				<button
					className='btn'
					onClick={() =>
						addOrder({
							id,
							name,
							price,
						})
					}
				>
					Купить
				</button>
				<span className='right price'>{price} Р</span>
			</div>
		</div>
	);
};

export { GoodsItem };
