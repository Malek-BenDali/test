import React from 'react'
import logo from '../images/logo.jpg'
import '../styles/Nav.css'

function Navbar() {
	return (
		<div className="container">
			<img src={logo} className="App-logo" alt="logo" />
			<li>Espace Particulier</li>
			<li>Espace Partenaire RGE</li>
			<li>Nos solutions</li>
			<li>A propos</li>
			<li>Contact</li>
			<button>S'indentifier</button>
		</div>
	)
}

export default Navbar
