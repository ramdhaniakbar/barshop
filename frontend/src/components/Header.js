import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Header = ({ location }) => {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logout());
		location.reload(true);
	};

	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-dark py-5'>
				<div className='container'>
					<NavLink to='/' className='navbar-brand'>
						<img src='/logo/white-logo.png' width={150} alt='' />
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse ms-3' id='navbarNav'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item me-2'>
								<NavLink
									to='/cart'
									className='nav-link'
									aria-current='page'
								>
									<i className='fas fa-shopping-cart'></i> Keranjang
								</NavLink>
							</li>
							{userInfo ? (
								<li className='nav-item dropdown'>
									<button
										className='dropdown-toggle nav-link bg-transparent border-0'
										data-bs-toggle='dropdown'
										aria-expanded='false'
									>
										{userInfo.name}
									</button>
									<ul className='dropdown-menu dropdown-menu-dark'>
										<li>
											<Link to='/profile' className='dropdown-item'>
												Profil
											</Link>
										</li>
										<li>
											<Link
												className='dropdown-item'
												onClick={logoutHandler}
											>
												Keluar
											</Link>
										</li>
									</ul>
								</li>
							) : (
								<li className='nav-item'>
									<NavLink to='/login' className='nav-link'>
										<i className='fas fa-user'></i> Masuk
									</NavLink>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
