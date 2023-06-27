import axios from 'axios';
import { API_URL, API_KEY } from '../config';
import React, { useState, useEffect } from 'react';
import { Preloader } from './Preloader';
import { GoodsList } from '../components/GoodsList';
import { Cart } from '../components/Cart';
import { CartList } from '../components/CartList';


const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isOpenCart, setOpenCart] = useState(false);

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
				response.data.featured && setGoods(response.data.featured);
				setLoading(false);
				console.log(response.data.featured);
			})
			.catch(function (error) {
				console.error(error);
			})
			.finally(function () {});
	}, []);

	const addOrder = (item) => {
		const itemIndex = order.findIndex((el) => (el.id === item.id));

		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
				} else {
					return orderItem;
				}
			});
			setOrder(newOrder);
		}
	};

	const handleOpenCart = () => {
		setOpenCart(!isOpenCart)
	}

	return (
		<main className='container content'>
			<Cart quantity={order.length} handleOpenCart={handleOpenCart} />
			{loading ? <Preloader /> : <GoodsList goods={goods} addOrder={addOrder} />}
			{
				isOpenCart && <CartList order={order} handleOpenCart={handleOpenCart} />
			}
		</main>
	);
};

export { Shop };
