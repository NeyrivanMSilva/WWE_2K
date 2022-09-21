/* ADD EMPLOYEE PAGE */
import "../ppvs.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/ppvs/appContext.js'

import Alert from "../../Alert.js";
import { useEffect } from 'react'
import PPV from "./ppv";
const Get2022Ppvs = () => {
	let {
		isLoading,
		isEditing,
		showAlert,
		alertType,
		alertText,
		displayAlert,
		getPpvs,
		ppvs,
		searchYear,
		handleChange
	} = useAppContext()

	useEffect(() => {
		
			getPpvs()
		/* 	setEdit() */
	 handleSearch() 

	}, [])

	/* const handleSubmit = (e) => {

		console.log("1");


		if (name === "" || birth === "" || country === "" || nativeLanguage === "" || clubLanguageLevel === "" || mobile === "" || position === "" || secondaryPosition === "" || foot === "" || mentality === "" || height === "" || weight === "" || Attacking === "" || Midfield === "" || Defending === "" || currentlyWorkingOn === "") {
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


		}
		console.log("5");
		createPlayer()

	}
 */

	const handleSearch = () => {
		
		handleChange({ inputname: "searchYear", value: 2022 })
	  }



	return (
		<>
	


	<div class="container-fluid">
	<div class="row">
	{ppvs.map((ppv) => {

return <PPV  {...ppv} />

})}
	</div>
</div>
		</>

	);
}

export default Get2022Ppvs;
