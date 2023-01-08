import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';

const RegisterScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userRegister;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Password do not match');
		} else {
			dispatch(register(name, email, password));
		}
	};

	return (
		<FormContainer>
			<h1 className='title mb-3'>Daftar</h1>
			{message && <Message variant='danger'>{message}</Message>}
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<form onSubmit={submitHandler}>
				<div className='mb-3'>
					<label className='form-label' htmlFor='inputName'>
						Nama
					</label>
					<input
						type='text'
						className='form-control'
						id='inputName'
						placeholder='Masukkan nama'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label' htmlFor='inputEmail'>
						Email
					</label>
					<input
						type='email'
						className='form-control'
						id='inputEmail'
						placeholder='Masukkan email'
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
						placeholder='Masukkan password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label' htmlFor='inputConfirmPassword'>
						Konfirmasi Password
					</label>
					<input
						type='password'
						className='form-control'
						id='inputConfirmPassword'
						placeholder='Masukkan konfirmasi password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-light'>
					Daftar
				</button>
			</form>

			<div className='row py-3'>
				<div className='col'>
					Punya Akun?{' '}
					<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
						Login
					</Link>
				</div>
			</div>
		</FormContainer>
	);
};

export default RegisterScreen;
