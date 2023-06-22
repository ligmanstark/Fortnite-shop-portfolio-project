import axios from 'axios';
import { API_URL, API_KEY } from '../config';
import React, { useState, useEffect } from 'react';
import { Preloader } from './Preloader';
import { GoodsList } from '../components/GoodsList';

const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);

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
				console.log('товары', goods);
			})
			.catch(function (error) {
				console.error(error);
			})
			.finally(function () {});
	}, []);

	return (
		<main className='conteiner content'>
			{loading ? <Preloader /> : <GoodsList goods={goods} />}
		</main>
	);
};

export { Shop };
