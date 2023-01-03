import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
// import products from '../products';
import axios from 'axios';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};

		fetchProducts();
	}, []);

	return (
		<>
			<div className='col-xl-6 col-md-8 col-10'>
				<h1 className='title mb-3'>
					Jelajahi Berbagai Pilihan Produk Terbaik Dari Kami
				</h1>
			</div>
			<div className='row'>
				{products.map((product) => (
					<div
						key={product._id}
						className='col-sm-12 col-md-6 col-lg-4 col-xl-3'
					>
						<Product product={product} />
					</div>
				))}
			</div>
		</>
	);
};

export default HomeScreen;
