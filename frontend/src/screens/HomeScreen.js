import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
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
			)}
		</>
	);
};

export default HomeScreen;
