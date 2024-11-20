import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
	return (
		<div className="container">
			<Header />
			<Hero />
			<Projects />
			<Experience />
		</div>
	);
}

export default App;
