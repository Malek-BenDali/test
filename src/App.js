import React, { useEffect, useRef } from 'react'
import { Navbar, FormulaireClient } from './container'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

function App() {
	let navRef = useRef(null)
	gsap.registerPlugin(ScrollTrigger)
	useEffect(() => {
		console.log('ref = ', navRef.current)
		let t1 = gsap.timeline({
			scrollTrigger: {
				trigger: navRef.current,
				start: 'center bottom',
			},
		})
		t1.from('.container', { x: 500, opacity: 0 })
		t1.from('.Upper-body', { opacity: 0 }, '-=0.2')
		t1.from('form', { opacity: 0 }, '-=0.2')
		t1.from('.personne-container', { opacity: 0 }, '-=0.2')
	}, [])
	return (
		<>
			<Navbar navRef={navRef} />
			<FormulaireClient />
		</>
	)
}

export default App
