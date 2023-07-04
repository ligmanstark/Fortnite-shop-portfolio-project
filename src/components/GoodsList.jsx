import { GoodsItem } from './GoodsItem';

const GoodsList = (props) => {
	const {
		goods = [],
		addOrder = Function.prototype,
	} = props;
	return (
		<div className='items'>
			{goods.length ? (
				goods.map((good) => (
					<GoodsItem
						key={good.id}
						{...good}
						addOrder={addOrder}
					/>
				))
			) : (
				<h4>Nothing...</h4>
			)}
		</div>
	);
};

export { GoodsList };
