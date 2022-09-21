/* ADD EMPLOYEE PAGE */
import "../ppvs.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/ppvs/appContext.js'

import Alert from "../../Alert.js";
import { useEffect } from 'react'
import Get2022Ppvs from "./get2022Ppvs";

const Ppvs = () => {
	let {
		isLoading,
		isEditing,
		showAlert,
		alertType,
		alertText,
		displayAlert,
		getPpvs,
		ppvs,
		searchYear
	} = useAppContext()

	useEffect(() => {
		getPpvs()
		/*	setEdit() */


	}, [])


	const handleSubmit = (e) => {

		console.log("1");


		/* if (name === "" || birth === "" || country === "" || nativeLanguage === "" || clubLanguageLevel === "" || mobile === "" || position === "" || secondaryPosition === "" || foot === "" || mentality === "" || height === "" || weight === "" || Attacking === "" || Midfield === "" || Defending === "" || currentlyWorkingOn === "") {
			alertType = "error"
			alertText = "Show values"
			displayAlert()
			console.log("2");
			return <Alert />
		}
		if (isEditing) {
			if (name === "" || birth === "" || country === "" || nativeLanguage === "" || clubLanguageLevel === "" || mobile === "" || position === "" || secondaryPosition === "" || foot === "" || mentality === "" || height === "" || weight === "" || Attacking === "" || Midfield === "" || Defending === "" || currentlyWorkingOn === "") {
				console.log("3");
				alertType = "error"
				alertText = "Show values"
				displayAlert()

				return <Alert />
			} else {
				editPlayer()
				setEdit()
				console.log("4");
				return
			}


		} */
	

	}





	return (
		<>

			<div className="row">
				<h1>Pay Per Views</h1>
			</div>

			<div className="row ppvs_container mr-0">
				<div className="col-md-12 p-0">
					<div class="tab-content" id="pills-tabContent">
						<div class="row-ppvs-TitleTab">

							<ul class="nav nav-pills h-100 justify-content-center" id="pills-tab" role="tablist">

								<li class="nav-item add-Player-Button" role="presentation">
									<button class="nav-link active ppv-Button-Container w-100 h-100" id="pills-personalProfessor-tab" data-toggle="pill" data-target="#pills-cursos-info" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Informação</button>
								</li>
								<li class="nav-item add-Player-Button" role="presentation">
									<button class="nav-link ppv-Button-Container w-100 h-100" id="pills-profile-tab" data-toggle="pill" data-target="#pills-cursos-semester1" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Disciplinas do 1º Semestre</button>
								</li>
								<li class="nav-item add-Player-Button" role="presentation">
									<button class="nav-link ppv-Button-Container w-100 h-100" id="pills-contact-tab" data-toggle="pill" data-target="#pills-cursos-semester2" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Disciplinas do 2º Semestre</button>
								</li>
							</ul>
						</div>

						<div class="tab-pane fade show active" id="pills-cursos-info" role="tabpanel" aria-labelledby="pills-home-tab"><Get2022Ppvs /></div>
						<div class="tab-pane fade" id="pills-cursos-semester1" role="tabpanel" aria-labelledby="pills-profile-tab">2</div>
						<div class="tab-pane fade" id="pills-cursos-semester2" role="tabpanel" aria-labelledby="pills-contact-tab">3</div>
					</div>
				</div>
			</div>

		</>

	);
}

export default Ppvs;
