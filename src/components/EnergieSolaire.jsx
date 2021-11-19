import React from 'react'
import '../styles/PersonnesEtLogement.css'

function EnergieSolaire({ setEnergieSolaireDetails, energieSolaireDetails }) {
	return (
		<div className="personne-container">
			<label className="margin-bottom">Type d'énergie solaire ?</label>
			<div className="buttons-start">
				<button
					className={`shadow icons marginRight ${
						energieSolaireDetails.type !== 'Solaire' && 'unclicked'
					}`}
					onClick={() =>
						setEnergieSolaireDetails({
							...energieSolaireDetails,
							type: 'Solaire',
						})
					}
				>
					Panneau Solaire
				</button>
				<button
					className={`shadow icons  ${
						energieSolaireDetails.type !== 'Photovoltaique' && 'unclicked'
					}`}
					onClick={() =>
						setEnergieSolaireDetails({
							...energieSolaireDetails,
							type: 'Photovoltaique',
						})
					}
				>
					Panneau Photovoltaique
				</button>
			</div>
			<label className="margin-bottom">Surface de logement ?</label>
			<input
				type="number"
				className="input-surface"
				placeholder="Nb m²"
				onChange={e =>
					setEnergieSolaireDetails({
						...energieSolaireDetails,
						surfaceDuLogement: e.target.value,
					})
				}
			/>
		</div>
	)
}

export default EnergieSolaire
