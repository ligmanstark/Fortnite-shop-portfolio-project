import { useContext } from 'react';
import { ShopContext } from '../context';
import { useEffect } from 'react';

const Toast = () => {
	const {
		alertName: name = '',
		closeAlert = Function.prototype,
		handleFinalOrder = Function.prototype,
		isFinal,
	} = useContext(ShopContext);

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);
		return () => {
			clearTimeout(timerId);
		};
		//eslint-disable-next-line
	}, [name]);

	useEffect(() => {
		let timerId;
		if (isFinal) {
			timerId = setTimeout(handleFinalOrder, 3000);
		}

		return () => {
			clearTimeout(timerId);
		};
		//eslint-disable-next-line
	}, [isFinal]);

	return (
		<div id="toast-container">
			{!isFinal ? (
				<div className="toast">{name} добавлен в корзину</div>
			) : (
				<div className="toast"> Заказ оформлен!</div>
			)}
		</div>
	);
};

export { Toast };
