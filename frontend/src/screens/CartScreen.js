import React, { useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Message from '../components/Message';

const CartScreen = () => {
	let { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	const productId = id;
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {
		navigate('/login?redirect=shipping');
	};

	return (
		<div className='row'>
			<div className='col-md-8'>
				<h1 className='title mb-3'>Keranjang</h1>
				{cartItems.length === 0 ? (
					<Message>
						Keranjang kamu kosong. <Link to='/'>Kembali</Link>
					</Message>
				) : (
					<ul className='list-group list-group-flush'>
						{cartItems.map((item) => (
							<div className='custom-card border-0 rounded mb-4'>
								<li
									className='list-group-item border-0 px-4 py-3'
									key={item.product}
								>
									<div className='row d-flex'>
										<div className='col-2'>
											<img
												src={item.image}
												alt={item.name}
												className='img-fluid rounded'
											/>
										</div>
										<div className='col-3'>
											<Link
												to={`/product/${item.product}`}
												className='text-decoration-none'
												style={{ color: '#e3e3ee' }}
											>
												{item.name}
											</Link>
										</div>
										<div className='col-3'>
											<NumericFormat
												prefix='Rp. '
												value={item.price}
												displayType='text'
												decimalSeparator=','
												thousandSeparator='.'
											/>
										</div>
										<div className='col col-sm-2'>
											<select
												className='form-select'
												aria-label='Default select example'
												value={item.qty}
												onChange={(e) =>
													dispatch(
														addToCart(
															item.product,
															Number(e.target.value)
														)
													)
												}
											>
												{[...Array(item.countInStock).keys()].map(
													(x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													)
												)}
											</select>
										</div>
										<div className='col-2'>
											<button
												type='button'
												className='btn btn-light'
												onClick={() =>
													removeFromCartHandler(item.product)
												}
											>
												<i className='fas fa-trash'></i>
											</button>
										</div>
									</div>
								</li>
							</div>
						))}
					</ul>
				)}
			</div>
			<div className='col-md-4'>
				<div className='card'>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item px-4 py-3'>
							<h2 className='subtotal'>
								Subtotal (
								{cartItems.reduce((acc, item) => acc + item.qty, 0)}{' '}
								Barang)
							</h2>
							<NumericFormat
								prefix='Rp. '
								value={cartItems.reduce(
									(acc, item) => acc + item.qty * item.price,
									0
								)}
								displayType='text'
								decimalSeparator=','
								thousandSeparator='.'
							/>
						</li>
						<li className='list-group-item px-4 py-3'>
							<button
								type='button'
								className='btn btn-light py-2 w-100'
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Lanjutkan Pembayaran
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;
