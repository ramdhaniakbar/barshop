import React from 'react';
import Rating from './Rating';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	return (
		<>
			<div
				className='card custom-card border-0 rounded me-3 my-4'
				key={product._id}
			>
				<Link to={`/product/${product._id}`}>
					<img
						src={product.image}
						className='card-img-top p-3'
						alt={product.name}
					/>
				</Link>

				<div className='card-body'>
					<Link
						to={`/product/${product._id}`}
						className='text-decoration-none text-black'
					>
						<h5 className='card-title'>{product.name}</h5>
					</Link>
					<p className='card-text my-3'>
						<Rating
							value={product.rating}
							text={`${product.numReviews} ulasan`}
						/>
					</p>
					<p>
						<NumericFormat
							className='card-text fs-4 fw-semibold'
							prefix='Rp. '
							value={product.price}
							displayType='text'
							decimalSeparator=','
							thousandSeparator='.'
						/>
					</p>
				</div>
			</div>
		</>
	);
};

export default Product;
