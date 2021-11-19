import React from 'react'
import '../styles/PersonnesEtLogement.css'

function PersonnesEtLogement({
	nombreDePersonne,
	setNombreDePersonne,
	appartOuMaison,
	setAppartOuMaison,
	logementDeuxAns,
	setLogementDeuxAns,
}) {
	return (
		<div className="personne-container">
			<label>Nombre de personnes au foyer</label>
			<div className="buttons margin-top">
				<button
					className={`shadow ${nombreDePersonne !== 1 && 'unclicked'}`}
					onClick={() => setNombreDePersonne(1)}
				>
					1
				</button>
				<button
					className={`shadow ${nombreDePersonne !== 2 && 'unclicked'}`}
					onClick={() => setNombreDePersonne(2)}
				>
					2
				</button>
				<button
					className={`shadow ${nombreDePersonne !== 3 && 'unclicked'}`}
					onClick={() => setNombreDePersonne(3)}
				>
					3
				</button>
				<button
					className={`shadow ${nombreDePersonne !== 4 && 'unclicked'}`}
					onClick={() => setNombreDePersonne(4)}
				>
					4
				</button>
				<button
					className={`shadow ${nombreDePersonne !== 5 && 'unclicked'}`}
					onClick={() => setNombreDePersonne(5)}
				>
					Autre
				</button>
			</div>
			<div>
				<label>
					Type de Logement<span>*</span>
				</label>
				<div className="buttons margin-top">
					<button
						className={`shadow appartMaison ${
							appartOuMaison !== 'Appartement' && 'unclicked'
						}`}
						onClick={() => setAppartOuMaison('Appartement')}
					>
						Appartement
					</button>
					<button
						className={`shadow appartMaison ${
							appartOuMaison !== 'Maison' && 'unclicked'
						}`}
						onClick={() => setAppartOuMaison('Maison')}
					>
						Maison
					</button>
				</div>
			</div>
			<div>
				<label>Votre logement à plus de 2ans ?</label>
				<div className="buttons margin-top">
					<button
						className={`shadow oui-non ${!logementDeuxAns && 'unclicked'}`}
						onClick={() => setLogementDeuxAns(true)}
					>
						Oui
					</button>
					<button
						className={`shadow oui-non ${logementDeuxAns && 'unclicked'}`}
						onClick={() => setLogementDeuxAns(false)}
					>
						Non
					</button>
				</div>
			</div>
		</div>
	)
}

export default PersonnesEtLogement
