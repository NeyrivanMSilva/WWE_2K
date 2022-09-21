/* ADD EMPLOYEE PAGE */
import "../ppvs.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/ppvs/appContext.js'

import Alert from "../../Alert.js";
import { useEffect } from 'react'

const PPV = ({ name, image }) => {
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


	const handleSearch = () => {

		handleChange({ inputname: "searchYear", value: 2022 })
	}



	return (
		(
			<>
				<div class="col-md-4 p-0">
					<div className="ppv_list_box">
						<div class="row ppv_list_img_container m-0">
							<div class="col-md-12 h-100 text-center">
								<img src={image} className="ppv_list_image" />
							</div>
						</div>
						<div class="row ppv_list_info_container m-0">
							<div class="col-md-12">
								<p className=" ppv_list_info_name">
									{name}
								</p>
							</div>
						</div>
					</div>
				</div>

			</>
		)

	);
}

export default PPV;
