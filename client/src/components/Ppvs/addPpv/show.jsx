/* ADD EMPLOYEE PAGE */
import "../ppvs.css"
import "../../buttons.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/ppvs/appContext.js'
import Alert from "../../Alert.js";

const Show = ({image}) => {
    let {
        isLoading,
        isEditing,
        showAlert,
        alertType,
        alertText,
        displayAlert,

        editPlayerId,
        id,
        name,
        birth,
        country,
        nativeLanguage,
        clubLanguageLevel,
        mobile,
        position,
        secondaryPosition,
        foot,
        mentality,
        height,
        weight,
        Attacking,
        Midfield,
        Defending,
        currentlyWorkingOn,
        handleChange,
        createPlayer,
        editPlayer,
        setEdit,

    } = useAppContext()







    return (
        <>
         
<div className="col-md-12 add_ppvs_show_container" style={{  backgroundImage: 'url(' + image + ')'}}>
</div>

        </>

    );
}

export default Show;
