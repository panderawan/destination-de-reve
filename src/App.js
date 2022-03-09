import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services.jsx';
import Products from './pages/products.jsx';
import SignUp from './pages/signUp.jsx';
import Footer from './components/footer/footer';

function App() {
	return (
		<>
		<Router>
			<Navbar />
			<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/services' element={<Services />} />
					<Route path='/products' element={<Products />} />
					<Route path='/sign-up' element={<SignUp />} />
					
				</Routes>
				<Footer />
			</Router>
			</>
	);
}

export default App;
