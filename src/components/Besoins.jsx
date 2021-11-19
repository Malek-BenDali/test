import React from 'react'
import '../styles/PersonnesEtLogement.css'

function Besoins({ besoins, setBesoins }) {
	return (
		<div className="personne-container">
			<label className="margin-bottom">Besoin d'une ?</label>
			<div className="buttons">
				<button
					className={`shadow icons ${!besoins.isolation && 'unclicked'}`}
					onClick={() =>
						setBesoins({ ...besoins, isolation: !besoins.isolation })
					}
				>
					Isolation
				</button>
				<button
					className={`shadow icons ${!besoins.renovation && 'unclicked'}`}
					onClick={() =>
						setBesoins({ ...besoins, renovation: !besoins.renovation })
					}
				>
					Rénovation
				</button>
				<button
					className={`shadow icons ${!besoins.bilanEnergitique && 'unclicked'}`}
					onClick={() =>
						setBesoins({
							...besoins,
							bilanEnergitique: !besoins.bilanEnergitique,
						})
					}
				>
					Bilan Erérgitique
				</button>
				<button
					className={`shadow icons ${!besoins.chauffage && 'unclicked'}`}
					onClick={() =>
						setBesoins({ ...besoins, chauffage: !besoins.chauffage })
					}
				>
					Chauffage
				</button>
				<button
					className={`shadow icons ${!besoins.energieSolaire && 'unclicked'}`}
					onClick={() =>
						setBesoins({ ...besoins, energieSolaire: !besoins.energieSolaire })
					}
				>
					Enérgie solaire
				</button>
			</div>
			<div className="buttons">
				<button
					className={`shadow icons ${!besoins.ventilation && 'unclicked'}`}
					onClick={() =>
						setBesoins({ ...besoins, ventilation: !besoins.ventilation })
					}
				>
					Ventilation
				</button>
				<button
					className={`shadow icons ${!besoins.purificateurDair && 'unclicked'}`}
					onClick={() =>
						setBesoins({
							...besoins,
							purificateurDair: !besoins.purificateurDair,
						})
					}
				>
					Installation de purificateur d'air
				</button>
				<button
					className={`shadow icons ${!besoins.deceteurCo && 'unclicked'}`}
					onClick={() =>
						setBesoins({
							...besoins,
							deceteurCo: !besoins.deceteurCo,
						})
					}
				>
					Installation de détecteur de CO²
				</button>
				<button
					className={`shadow icons ${!besoins.bomeDeRecharge && 'unclicked'}`}
					onClick={() =>
						setBesoins({ ...besoins, bomeDeRecharge: !besoins.bomeDeRecharge })
					}
				>
					Installation de Bome de recharge
				</button>
				<button
					className={`shadow icons ${!besoins.prime && 'unclicked'}`}
					onClick={() => setBesoins({ ...besoins, prime: !besoins.prime })}
				>
					Combien ma prime ?
				</button>
			</div>
		</div>
	)
}

export default Besoins
