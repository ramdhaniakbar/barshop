import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<div className='container'>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/product/:id' element={<ProductScreen />} />
						<Route path='/cart/:id?' element={<CartScreen />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default App;
