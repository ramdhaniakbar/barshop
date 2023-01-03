import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${id}`);
			setProduct(data);
		};

		fetchProduct();
	}, []);

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				<i className='fas fa-arrow-left'></i> &nbsp; Kembali
			</Link>
			<div className='row py-3'>
				<div className='col-lg-6'>
					<img
						src={product.image}
						className='img-fluid'
						alt={product.name}
					/>
				</div>
				<div className='col-lg-3'>
					<ul className='list-group list-group-flush py-2'>
						<li className='list-group-item'>
							<h3 className='list-title'>{product.name}</h3>
						</li>
						<li className='list-group-item'>
							<Rating
								value={product.rating}
								text={`${product.numReviews} ulasan`}
							/>
						</li>
						<li className='list-group-item list-text'>
							Harga:{' '}
							<NumericFormat
								className='card-text fw-semibold list-text'
								prefix='Rp. '
								value={product.price}
								displayType='text'
								decimalSeparator=','
								thousandSeparator='.'
							/>
						</li>
						<li className='list-group-item list-text'>
							Deskripsi: {product.description}
						</li>
					</ul>
				</div>
				<div className='col-lg-3'>
					<div className='card'>
						<ul className='list-group list-group-flush'>
							<li className='list-group-item px-4 py-3'>
								<div className='row'>
									<div className='col list-text'>Harga: </div>
									<div className='col list-text'>
										<NumericFormat
											className='card-text fw-semibold list-text'
											prefix='Rp. '
											value={product.price}
											displayType='text'
											decimalSeparator=','
											thousandSeparator='.'
										/>
									</div>
								</div>
							</li>
							<li className='list-group-item px-4 py-3'>
								<div className='row'>
									<div className='col list-text'>Status: </div>
									<div className='col list-text'>
										{product.countInStock > 0
											? 'Tersedia'
											: 'Stok Habis'}
									</div>
								</div>
							</li>
							<li className='list-group-item px-4 py-3'>
								<button
									className='btn btn-light py-2 w-100'
									type='button'
									disabled={product.countInStock === 0}
								>
									Tambah Ke Troli
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductScreen;
