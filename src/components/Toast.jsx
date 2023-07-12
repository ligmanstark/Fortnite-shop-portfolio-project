import { useEffect } from 'react';

const Toast = (props) => {
	const {
		name = '',
		closeAlert = Function.prototype,
		handleFinalOrder = Function.prototype,
		isFinal,
	} = props;

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);
		return () => {
			clearTimeout(timerId);
		};
		//eslint-disable-next-line
	}, [name]);

	useEffect(() => {
		const timerId = setTimeout(handleFinalOrder, 3000);
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
