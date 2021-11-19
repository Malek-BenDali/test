import React from 'react'
import '../styles/PersonnesEtLogement.css'

function TranscheFiscal({ setRevenueFiscal, revenueFiscal }) {
	return (
		<div className="personne-container">
			<label className="margin-bottom">Tranche de revenu fiscal ?</label>
			<div className="buttons">
				<button
					className={`shadow tranche  ${
						revenueFiscal !== 'faible' && 'unclicked'
					}`}
					type="button"
					onClick={() => setRevenueFiscal('faible')}
				>
					{' '}
					Moins de 30572€
				</button>
				<button
					className={`shadow tranche  ${
						revenueFiscal !== 'moyen' && 'unclicked'
					}`}
					type="button"
					onClick={() => setRevenueFiscal('moyen')}
				>
					Entre 30572€ et 39192€
				</button>
				<button
					className={`shadow tranche  ${
						revenueFiscal !== 'haut' && 'unclicked'
					}`}
					type="button"
					onClick={() => setRevenueFiscal('haut')}
				>
					Plus de 39192€
				</button>
			</div>
			<div className="submit">
				<button className="check-out">DEMANDER UN DEVIS</button>
				<p>un expert travaux prendre contact avec vous sous 48H</p>
			</div>
		</div>
	)
}

export default TranscheFiscal
