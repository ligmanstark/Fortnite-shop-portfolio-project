import { useContext } from 'react';
import { GoodsItem } from './GoodsItem';
import { ShopContext } from '../context';

const GoodsList = () => {
	const { goods = [] } = useContext(ShopContext);

	if (!goods.length) {
		return <h3>Nothing here</h3>
	}
	return (
		<div className="items">
				{goods.map((item) => (<GoodsItem key={item.id} {...item} />))}
		</div>
	);
};

export { GoodsList };
