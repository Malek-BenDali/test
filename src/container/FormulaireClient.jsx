import React, { useState } from 'react'
import {
	PersonnesEtLogement,
	Besoins,
	EnergieSolaire,
	TranscheFiscal,
} from '../components'
import '../styles/Formulaire.css'

function FormulaireClient() {
	const [nom, setNom] = useState('')
	const [prenom, setPrenom] = useState('')
	const [email, setEmail] = useState('')
	const [dateDeNaissance, setDateDeNaissance] = useState('')
	const [adresse, setAdresse] = useState('')
	const [ville, setVille] = useState('')
	const [codePostale, setCodePostale] = useState('')
	const [nombreDePersonne, setNombreDePersonne] = useState(null)
	const [appartOuMaison, setAppartOuMaison] = useState(null)
	const [logementDeuxAns, setLogementDeuxAns] = useState(true)
	const [besoins, setBesoins] = useState({
		isolation: false,
		renovation: false,
		bilanEnergitique: false,
		chauffage: false,
		energieSolaire: false,
		ventilation: false,
		purificateurDair: false,
		deceteurCo: false,
		bomeDeRecharge: false,
		prime: false,
	})
	const [energieSolaireDetails, setEnergieSolaireDetails] = useState({
		type: null,
		surfaceDuLogement: null,
	})
	const [revenueFiscal, setRevenueFiscal] = useState('')
	return (
		<>
			<div className="Upper-body">
				<h1>BIENVENUE</h1>
				<h2>Formulaire client</h2>
				<p>
					Posez ici en quelques clics les premières briques de votre projet.
				</p>
				<p>
					Un expert travaux prendra contact avec vous sous 48H, avant de vous
					proposer au moins deux artisans de confiance de proches de vous.
				</p>
			</div>
			<form>
				<div className="block">
					<div className="col">
						<label>
							Nom<span>*</span>
						</label>
						<input
							placeholder="Karrouch"
							type="text"
							required
							value={nom}
							onChange={e => setNom(e.target.value)}
						/>
					</div>
					<div className="col">
						<label>
							Prenom<span>*</span>
						</label>
						<input
							placeholder="Ali"
							type="text"
							required
							value={prenom}
							onChange={e => setPrenom(e.target.value)}
						/>
					</div>
				</div>
				<div className="block">
					<div className="col">
						<label>
							Email<span>*</span>
						</label>
						<input
							placeholder="Email"
							type="email"
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="col">
						<label>
							Date de naissance<span>*</span>
						</label>
						<input
							type="date"
							required
							value={dateDeNaissance}
							onChange={e => setDateDeNaissance(e.target.value)}
						/>
					</div>
				</div>
				<div className="block">
					<div className="col">
						<label>
							Adresse<span>*</span>
						</label>
						<input
							type="text"
							placeholder="Adresse"
							required
							value={adresse}
							onChange={e => setAdresse(e.target.value)}
						/>
					</div>
					<div className="double">
						<div className="col">
							<label>
								Ville<span>*</span>
							</label>
							<input
								placeholder="Ville"
								className="double-input"
								type="text"
								required
								value={ville}
								onChange={e => setVille(e.target.value)}
							/>
						</div>
						<div className="col">
							<label>Code Postale</label>
							<input
								placeholder="10000"
								className="double-input"
								type="number"
								value={codePostale}
								onChange={e => setCodePostale(e.target.value)}
							/>
						</div>
					</div>
				</div>
			</form>
			<PersonnesEtLogement
				nombreDePersonne={nombreDePersonne}
				setNombreDePersonne={setNombreDePersonne}
				appartOuMaison={appartOuMaison}
				setAppartOuMaison={setAppartOuMaison}
				logementDeuxAns={logementDeuxAns}
				setLogementDeuxAns={setLogementDeuxAns}
			/>
			<Besoins besoins={besoins} setBesoins={setBesoins} />
			{besoins.energieSolaire && (
				<EnergieSolaire
					energieSolaireDetails={energieSolaireDetails}
					setEnergieSolaireDetails={setEnergieSolaireDetails}
				/>
			)}
			<TranscheFiscal
				revenueFiscal={revenueFiscal}
				setRevenueFiscal={setRevenueFiscal}
			/>
		</>
	)
}

export default FormulaireClient
