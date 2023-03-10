import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<div className='container'>
					<Routes>
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/register' element={<RegisterScreen />} />
						<Route path='/profile' element={<ProfileScreen />} />
						<Route path='/product/:id' element={<ProductScreen />} />
						<Route path='/cart/:id?' element={<CartScreen />} />
						<Route path='/' element={<HomeScreen />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default App;
