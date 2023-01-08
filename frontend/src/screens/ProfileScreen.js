import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const ProfileScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	useEffect(() => {
		if (!userInfo) {
			navigate('/login');
		} else {
			if (!user || !user.name || success) {
				dispatch({ type: USER_UPDATE_PROFILE_RESET });
				dispatch(getUserDetails('profile'));
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [dispatch, navigate, userInfo, user, success]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Password do not match');
		} else {
			dispatch(updateUserProfile({ id: user._id, name, email, password }));
		}
	};

	return (
		<div className='row'>
			<div className='col-md-3'>
				<h2 className='title mb-3'>Profil User</h2>
				{message && <Message variant='danger'>{message}</Message>}
				{error && <Message variant='danger'>{error}</Message>}
				{success && <Message variant='success'>Profile updated</Message>}
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
						Perbarui
					</button>
				</form>
			</div>
			<div className='col-md-9'>
				<h2 className='title'>Order Saya</h2>
			</div>
		</div>
	);
};

export default ProfileScreen;
