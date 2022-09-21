/* ADD EMPLOYEE PAGE */
import "../ppvs.css"
import "../../buttons.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/ppvs/appContext.js'
import { useState } from 'react';
import Alert from "../../Alert.js";
import SelectShowModal from "./selectShow";
import assets from "../../../dummyData/ppvs.js"
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import MatchModal from "./matchModal";

const AddPpvBox = () => {
    let {
        handleChange,
        ppv,
        image
    } = useAppContext()

    const [ShowIsChosen, setShowIsChosen] = useState(false);
    const [Match1, setMatch1] = useState(false);
    const [Match1Type, setMatch1Type] = useState("");
    const [Match1Wrestler1, setMatch1Wrestler1] = useState("");
    const [Match1Wrestler2, setMatch1Wrestler2] = useState("");
    const [Match1Wrestler3, setMatch1Wrestler3] = useState("");
    const [Match1Wrestler4, setMatch1Wrestler4] = useState("");
    const [Match1Wrestler5, setMatch1Wrestler5] = useState("");
    const [Match1Wrestler6, setMatch1Wrestler6] = useState("");
    const [Match1MatchType, setMatch1MatchType] = useState("");
    const [Match1Title, setMatch1Title] = useState("");

    const handleSearch = ({ name, image }) => {
        handleChange({ inputname: "ppv", value: name })
        handleChange({ inputname: "image", value: image })
        setShowIsChosen(true)
        return (document.getElementById("select_show_matches").style.display = "block")
    }
    const closeShow = () => {
        setShowIsChosen(false)
        return (document.getElementById("select_show_matches").style.display = "none")
    }
    const createMatch = ({ matchType, input2, input3, input4, input5, input6, input7, input8, input9 }) => {
        if (matchType === "One on One") {

        }
        if (matchType === "Tag Team") {

        }
        if (matchType === "Triple Threat") {

        }
        if (matchType === "Fatal four Way") {

        }
        if (matchType === "Five Way") {

        }
        if (matchType === "Trio Tag Match") {

        }

    }
const matchNumber=(matchNumberModal)=>{
    handleChange({ inputname: "matchNumber", value: matchNumberModal })
}









    return (
        <>

<MatchModal/>

            <SelectShowModal />
            <div className="row">
                <h1>ADD Pay Per View</h1>
            </div>

            <div className="row add-ppv-container mr-0">
                <div class="row w-100">
                    <div class="col-md-12 text-center">
                        {/*  <button className="button-select-show" data-toggle="modal" data-target="#selectShow" >
                           SELECT SHOW
                        </button> */}
                        <div class="dropdown">

                            <button class="button-select-show dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" style={{ background: ShowIsChosen ? 'url(' + image + ')' : 'salmon' }}>
                                Choose
                            </button>
                            <MdOutlineSettingsBackupRestore className="select_show_deleteShow" size={50} onClick={() => { closeShow() }} />
                          
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="ppv_show_dropdown">
                                {assets.map((item) => {
                                    const { id, name, image } = item;
                                    return (
                                        <>
                                            <a class="dropdown-item ppv_show_selectShow" onClick={() => handleSearch({ name, image })}>{name}</a>
                                        </>
                                    )
                                }

                                )}

                            </div>
                        </div>
                    </div>
                </div>


                <div class="row w-100">
                    <div class="col-md-12 " id="select_show_matches">

                        <div class="col-md-12 text-center">
                       
                        <button className="button-select-show-match" data-toggle="modal" data-target="#newMatch" onClick={()=>{matchNumber("1")}}>
                            MATCH 1
                        </button>
                        </div>
                        <div class="col-md-12 text-center">
                           <button className="button-select-show-match" data-toggle="modal" data-target="#newMatch" onClick={()=>{matchNumber("2")}}>
                                MATCH 2
                            </button>
                        </div>
                        <div class="col-md-12 text-center">
                           <button className="button-select-show-match" data-toggle="modal" data-target="#newMatch" onClick={()=>{matchNumber("3")}}>
                                MATCH 3
                            </button>
                        </div>
                        <div class="col-md-12 text-center">
                           <button className="button-select-show-match" data-toggle="modal" data-target="#newMatch" onClick={()=>{matchNumber("4")}}>
                                MATCH 4
                            </button>
                        </div>
                        <div class="col-md-12 text-center">
                           <button className="button-select-show-match" data-toggle="modal" data-target="#newMatch" onClick={()=>{matchNumber("5")}}>
                                MATCH 5
                            </button>
                        </div>
                        <div class="col-md-12 text-center">
                           <button className="button-select-show-match" data-toggle="modal" data-target="#newMatch" onClick={()=>{matchNumber("6")}}>
                                MATCH 6
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default AddPpvBox;
