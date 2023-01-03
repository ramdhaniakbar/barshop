import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import axios from 'axios';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = () => {
	const [qty, setQty] = useState(1);

	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(id));
	}, [dispatch, id]);

	const addToCartHandler = () => {
		navigate(`/cart/${id}?qty=${qty}`);
	};

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				<i className='fas fa-arrow-left'></i> &nbsp; Kembali
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
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
								{product.countInStock > 0 && (
									<li className='list-group-item px-4 py-3'>
										<div className='row'>
											<div className='col list-text'>Qty: </div>
											<div className='col list-text'>
												<select
													className='form-select'
													aria-label='Default select example'
													value={qty}
													onChange={(e) => setQty(e.target.value)}
												>
													{[
														...Array(product.countInStock).keys(),
													].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</select>
											</div>
										</div>
									</li>
								)}
								<li className='list-group-item px-4 py-3'>
									<button
										onClick={addToCartHandler}
										className='btn btn-light py-2 w-100'
										type='button'
										disabled={product.countInStock === 0}
									>
										Tambah Ke Keranjang
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductScreen;
