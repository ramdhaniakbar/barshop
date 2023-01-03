import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
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
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item me-2'>
								<NavLink
									to='/cart'
									className='nav-link'
									aria-current='page'
								>
									<i className='fas fa-shopping-cart'></i> Troli
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/signin' className='nav-link'>
									<i className='fas fa-user'></i> Masuk
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
