import axios from 'axios';
import { API_URL, API_KEY } from '../config';
import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import { Preloader } from './Preloader';
import { GoodsList } from '../components/GoodsList';
import { Cart } from '../components/Cart';
import { CartList } from '../components/CartList';
import { Toast } from '../components/Toast';

const Shop = () => {
	const { order, loading, isOpenCart, alertName, isFinal, setGoods } =
		useContext(ShopContext);

	useEffect(function getGoods() {
		axios
			.get(API_URL, {
				params: {
					lang: 'ru',
				},
				headers: {
					Authorization: API_KEY,
				},
			})
			.then((response) => {
				setGoods(response.data.featured);
				console.log(response.data.featured);
			})
			.catch(function (error) {
				console.error(error);
			})
			.finally(function () {});
	}, []);

	return (
		<main className="container content">
			<Cart quantity={order.length} />
			{loading ? <Preloader /> : <GoodsList />}
			{isOpenCart && <CartList />}
			{(alertName || isFinal) && <Toast />}
		</main>
	);
};

export { Shop };
