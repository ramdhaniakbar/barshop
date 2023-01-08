import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<FormContainer>
			<h1 className='title mb-3'>Masuk</h1>
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<form onSubmit={submitHandler}>
				<div className='mb-3'>
					<label className='form-label' htmlFor='inputEmail'>
						Email
					</label>
					<input
						type='email'
						className='form-control'
						id='inputEmail'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label' htmlFor='inputPassword'>
						Password
					</label>
					<input
						type='password'
						className='form-control'
						id='inputPassword'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-light'>
					Masuk
				</button>
			</form>

			<div className='row py-3'>
				<div className='col'>
					Pelanggan Baru?{' '}
					<Link
						to={redirect ? `/register?redirect=${redirect}` : '/register'}
					>
						Daftar
					</Link>
				</div>
			</div>
		</FormContainer>
	);
};

export default LoginScreen;
