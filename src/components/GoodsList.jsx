import { GoodsItem } from './GoodsItem';

const GoodsList = (props) => {
	const { goods = [] } = props;
	return (
		<div className='items'>
			{goods.length ? (
				goods.map((good) => (
					<GoodsItem
						key={good.id}
						{...good}
					/>
				))
			) : (
				<h4>Nothing...</h4>
			)}
		</div>
	);
};

export { GoodsList };
