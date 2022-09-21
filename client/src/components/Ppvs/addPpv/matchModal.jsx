/* ADD EMPLOYEE PAGE */
import "../ppvs.css"
import "../../buttons.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/ppvs/appContext.js'
import { useState, useEffect } from 'react';
import Alert from "../../Alert.js";
import SelectShowModal from "./selectShow";
import assets from "../../../dummyData/matchNumber.js";
import assets2 from "../../../dummyData/matchType.js";
import superstars from "../../../dummyData/rawSuperstars.js";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";


const MatchModal = () => {
    let {
        matchNumber,
        handleChange,
   
       

        MatchType,
        MatchMatchType,
        MatchWrestler1,
        MatchWrestler1Image,
        MatchWrestler2Image,
        MatchWrestler2,
        MatchWrestler3,
        MatchWrestler4,
        MatchWrestler5,
        MatchWrestler6,
        MatchTitle,


        ppvId1,
        Match1Wrestler1,
        Match1Wrestler2,
        Match1Wrestler3,
        Match1Wrestler4,
        Match1Wrestler5,
        Match1Wrestler6,
        winner1,
        title1,
        type1,
        number1,
        /*  --------MATCH2-------- */
        ppvId2,
        Match2Wrestler1,
        Match2Wrestler2,
        Match2Wrestler3,
        Match2Wrestler4,
        Match2Wrestler5,
        Match2Wrestler6,
        winner2,
        title2,
        type2,
        number2,
        /*  --------MATCH3-------- */
        ppvId3,
        Match3Wrestler1,
        Match3Wrestler2,
        Match3Wrestler3,
        Match3Wrestler4,
        Match3Wrestler5,
        Match3Wrestler6,
        winner3,
        title3,
        type3,
        number3,
      
        /*  --------MATCH4-------- */
        ppvId4,
        Match4Wrestler1,
        Match4Wrestler2,
        Match4Wrestler3,
        Match4Wrestler4,
        Match4Wrestler5,
        Match4Wrestler6,
        winner4,
        title4,
        type4,
        number4,
      
        /*  --------MATCH5-------- */
        ppvId5,
        Match5Wrestler1,
        Match5Wrestler2,
        Match5Wrestler3,
        Match5Wrestler4,
        Match5Wrestler5,
        Match5Wrestler6,
        winner5,
        title5,
        type5,
        number5,
      
        /*  --------MATCH6-------- */
        ppvId6,
        Match6Wrestler1,
        Match6Wrestler2,
        Match6Wrestler3,
        Match6Wrestler4,
        Match6Wrestler5,
        Match6Wrestler6,
        winner6,
        title6,
        type6,  
        number6,
        /*  --------MATC7-------- */
        ppvId7,
        Match7Wrestler1,
        Match7Wrestler2,
        Match7Wrestler3,
        Match7Wrestler4,
        Match7Wrestler5,
        Match7Wrestler6,
        winner7,
        title7,
        type7,
        number7,
      
        /*  --------MATCH8-------- */
        ppvId8,
        Match8Wrestler1,
        Match8Wrestler2,
        Match8Wrestler3,
        Match8Wrestler4,
        Match8Wrestler5,
        Match8Wrestler6,
        winner8,
        title8,
        type8,
        number8,
      
        /*  --------MATCH9-------- */
        ppvId9,
        Match9Wrestler1,
        Match9Wrestler2,
        Match9Wrestler3,
        Match9Wrestler4,
        Match9Wrestler5,
        Match9Wrestler6,
        winner9,
        title9,
        type9,
        number9,
      
        /*  --------MATCH10-------- */
        ppvId10,
        Match10Wrestler1,
        Match10Wrestler2,
        Match10Wrestler3,
        Match10Wrestler4,
        Match10Wrestler5,
        Match10Wrestler6,
        winner10,
        title10,
        type10,
        number10,
        
    } = useAppContext()

    useEffect(() => {
        Current()
  Reset()
        // eslint-disable-next-line
    }, )

    useEffect(() => {
       
   
        // eslint-disable-next-line
    },{} )

   

const Reset=()=>{
    console.log(MatchType);
    if(MatchType===""){
        console.log("rarara");

       return document.getElementById("selectMatch_details").style.display = "block",
    document.getElementById("match_col_wrestlers_singles").style.display = "none"
   
    }
   

    if(MatchType!="" && MatchMatchType===""){
 
       return document.getElementById("selectMatch_details").style.display = "block",
    document.getElementById("match_col_matchType").style.display = "block",

    document.getElementById("match_col_wrestlers_singles").style.display = "none"
    
    }

    if(MatchType!="" && MatchMatchType!=""){
 
        return document.getElementById("selectMatch_details").style.display = "none",
     
        document.getElementById("match_col_wrestlers_singles").style.display = "block"
    }
}

const Reset2=()=>{
     
    document.getElementById("match_col_matchType").style.display = "none"
}

    const Current = () => {
 
        if (matchNumber === "1") {
            handleChange({ inputname: "MatchType", value: type1 })
            handleChange({ inputname: "MatchMatchType", value: number1 })
            handleChange({ inputname: "MatchWrestler1", value: Match1Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match1Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match1Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match1Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match1Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match1Wrestler6 })
        }
        if (matchNumber === "2") {
            handleChange({ inputname: "MatchType", value: type2 })
            handleChange({ inputname: "MatchMatchType", value: number2 })
            handleChange({ inputname: "MatchWrestler1", value: Match2Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match2Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match2Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match2Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match2Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match2Wrestler6 })
        }

        if (matchNumber === "3") {
            handleChange({ inputname: "MatchType", value: type3 })
            handleChange({ inputname: "MatchMatchType", value: number3 })
            handleChange({ inputname: "MatchWrestler1", value: Match3Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match3Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match3Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match3Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match3Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match3Wrestler6 })
        }
        if (matchNumber === "4") {
            handleChange({ inputname: "MatchType", value: type4 })
            handleChange({ inputname: "MatchMatchType", value: number4 })
            handleChange({ inputname: "MatchWrestler1", value: Match4Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match4Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match4Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match4Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match4Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match4Wrestler6 })
        }
        if (matchNumber === "5") {
            handleChange({ inputname: "MatchType", value: type5 })
            handleChange({ inputname: "MatchMatchType", value: number5 })
            handleChange({ inputname: "MatchWrestler1", value: Match5Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match5Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match5Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match5Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match5Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match5Wrestler6 })
        }
        if (matchNumber === "6") {
            handleChange({ inputname: "MatchType", value: type6 })
            handleChange({ inputname: "MatchMatchType", value: number6 })
            handleChange({ inputname: "MatchWrestler1", value: Match6Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match6Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match6Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match6Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match6Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match6Wrestler6 })
        }
        if (matchNumber === "7") {
            handleChange({ inputname: "MatchType", value: type7 })
            handleChange({ inputname: "MatchMatchType", value: number7 })
            handleChange({ inputname: "MatchWrestler1", value: Match7Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match7Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match7Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match7Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match7Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match7Wrestler6 })
        }
        if (matchNumber === "8") {
            handleChange({ inputname: "MatchType", value: type8 })
            handleChange({ inputname: "MatchMatchType", value: number8 })
            handleChange({ inputname: "MatchWrestler1", value: Match8Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match8Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match8Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match8Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match8Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match8Wrestler6 })
        }
        if (matchNumber === "9") {
            handleChange({ inputname: "MatchType", value: type9 })
            handleChange({ inputname: "MatchMatchType", value: number9 })
            handleChange({ inputname: "MatchWrestler1", value: Match9Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match9Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match9Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match9Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match9Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match9Wrestler6 })
        }
        if (matchNumber === "10") {
            handleChange({ inputname: "MatchType", value: type10 })
            handleChange({ inputname: "MatchMatchType", value: number10 })
            handleChange({ inputname: "MatchWrestler1", value: Match10Wrestler1 })
            handleChange({ inputname: "MatchWrestler2", value: Match10Wrestler2 })
            handleChange({ inputname: "MatchWrestler3", value: Match10Wrestler3 })
            handleChange({ inputname: "MatchWrestler4", value: Match10Wrestler4 })
            handleChange({ inputname: "MatchWrestler5", value: Match10Wrestler5 })
            handleChange({ inputname: "MatchWrestler6", value: Match10Wrestler6 })
        }
   




    }
 
    const [MatchTypeIsChosen, setMatchType] = useState(false);
    const [MatchTypeMatchIsChosen, setMatchTypeMatch] = useState(false);
    /*     const [Match1, setMatch1] = useState(false);
        const [Match1Type, setMatch1Type] = useState("");
        const [Match1Wrestler1, setMatch1Wrestler1] = useState("");
        const [Match1Wrestler2, setMatch1Wrestler2] = useState("");
        const [Match1Wrestler3, setMatch1Wrestler3] = useState("");
        const [Match1Wrestler4, setMatch1Wrestler4] = useState("");
        const [Match1Wrestler5, setMatch1Wrestler5] = useState("");
        const [Match1Wrestler6, setMatch1Wrestler6] = useState("");
        const [Match1MatchType, setMatch1MatchType] = useState("");
        const [Match1Title, setMatch1Title] = useState(""); */

    /*
      
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
    */



    const closeShow = () => {
        handleChange({ inputname: `type${matchNumber}`, value:   "" })
        handleChange({ inputname: `number${matchNumber}` , value:    "" })
        setMatchType(false)
        setMatchTypeMatch(false)
        return (document.getElementById("match_col_matchType").style.display = "none")
    }
    const handleSearch = (name1, value1, image1) => {
 
        handleChange({ inputname: name1, value: value1 })


        if (name1 === `Match${matchNumber}Wrestler1`  ) {
            handleChange({ inputname: "MatchWrestler1Image", value: image1 })
            handleChange({ inputname: "MatchWrestler1", value: value1 })

        }
        if (name1 === `Match${matchNumber}Wrestler2`) {
            handleChange({ inputname: "MatchWrestler2Image", value: image1 })
            handleChange({ inputname: "MatchWrestler2", value: value1 })
        }

        if (name1 === `type${matchNumber}`) {
            console.log("pixa3");
            setMatchType(true)
        }
        if (name1 ===  `number${matchNumber}`) {
            setMatchTypeMatch(true)
            console.log("pixa4");
        }

        if (name1 === `type${matchNumber}`) {
            return (document.getElementById("match_col_matchType").style.display = "block")
        }

        if (name1 === `number${matchNumber}`) {

            return (document.getElementById("selectMatch_details").style.display = "none",
                document.getElementById("modalNewMatch").style.height = "130vh",
                document.getElementById("match_col_wrestlers_singles").style.display = "block"
            )
        }


    }



    return (
        <>


            <div class="modal fade w-100" id="newMatch" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog w-75" role="document" id='modal1'>
                    <div class="modal-content" id='modalNewMatch'>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Match {matchNumber}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">



                            <div className="container-fluid">
                                <div className="row">
                                    <nav>
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item">
                                                <a   onClick={()=>{Reset()}}  >{MatchType}</a>
                                            </li>
                                            <li class="breadcrumb-item">
                                                <a   onClick={()=>{Reset()}}  >{MatchMatchType}</a>
                                            </li>
                                            <li class="breadcrumb-item active">
                                                Wrestlers
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="row w-100 text-center">
                                    <div className="row w-100" id="selectMatch_details">
                                        <div className="col-md-12 w-100">
                                            <button class="button-select-matchType dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" >
                                                {MatchTypeIsChosen ? `${MatchType}` : "SELECT MATCH"}
                                            </button>
                                            <MdOutlineSettingsBackupRestore className="select_show_deleteShow" size={50} onClick={() => { closeShow() }} />
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2" id="ppv_match_dropdown">
                                                {assets.map((item) => {
                                                    const { id, name } = item;
                                                    return (
                                                        <>
                                                            <a class="dropdown-item ppv_show_selectShow" onClick={() => { handleSearch(`type${matchNumber}`, name) }}>{name}</a>
                                                        </>
                                                    )
                                                }

                                                )}

                                            </div>
                                        </div>


                                        <div className="col-md-12 w-100" id="match_col_matchType">
                                            <button class="button-select-matchType dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" >
                                                {MatchTypeMatchIsChosen ? `${MatchMatchType}` : "SELECT MATCH"}
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2" id="ppv_match_dropdown">
                                                {assets2.map((item) => {
                                                    const { id, name } = item;
                                                    return (
                                                        <>
                                                            <a class="dropdown-item ppv_show_selectShow" onClick={() => { handleSearch(`number${matchNumber}`  , name) }}>{name}</a>
                                                        </>
                                                    )
                                                }

                                                )}

                                            </div>
                                        </div>
                                    </div>


                                    <div class="container-fluid" id="match_col_wrestlers_singles">
                                        <div class="row ">
                                            <div className="col-md-12">


                                                <div class="row  ">
                                                    <div class="col-md-6">
                                                        <img src={MatchWrestler1Image} alt="" className="selectMatch_wrestlerImage" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <img src={MatchWrestler2Image} alt="" className="selectMatch_wrestlerImage" />
                                                    </div>

                                                </div>
                                                <div class="row ppv_createMatch_wrestlersRow">
                                                    <div class="col-md-6 ">
                                                        <div className="selectMatch_wrestlerBox">

                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <h3 className="text-white">
                                                                        {MatchTypeIsChosen ? MatchWrestler1 : "SELECT MATCH"}
                                                                    </h3>
                                                                    <h3 className="text-white">
                                                                        h3. Lorem ipsum dolor sit amet.
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton2" id="ppv_matchWrestlers_dropdown">
                                                                        {superstars.map((item) => {
                                                                            const { id, name, image } = item;
                                                                            return (
                                                                                <>
                                                                                    <a class="dropdown-item ppv_show_selectWrestler" onClick={() => { handleSearch(`Match${matchNumber}Wrestler1`, name, image) }}>{name}</a>
                                                                                </>
                                                                            )
                                                                        }

                                                                        )}

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-md-6 ">
                                                        <div className="selectMatch_wrestlerBox">

                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <h3 className="text-white">
                                                                        {MatchTypeIsChosen ?  Match1Wrestler2  : "SELECT MATCH"}
                                                                    </h3>
                                                                    <h3 className="text-white">
                                                                        h3. Lorem ipsum dolor sit amet.
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton2" id="ppv_matchWrestlers_dropdown">
                                                                        {superstars.map((item) => {
                                                                            const { id, name, image } = item;
                                                                            return (
                                                                                <>
                                                                                    <a class="dropdown-item ppv_show_selectWrestler" onClick={() => { handleSearch(`Match${matchNumber}Wrestler2`, name, image) }}>{name}</a>
                                                                                </>
                                                                            )
                                                                        }

                                                                        )}

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/*   <div className="container-fluid" id="match_col_wrestlers_singles">
                                        <div className="row ">
                                            <div className="col-md-6">
                                                <img src={MatchWrestler1Image} alt="" className="selectMatch_wrestlerImage" />
                                            </div>
                                            <div className="col-md-6">
                                                <img src={MatchWrestler1Image} alt="" className="selectMatch_wrestlerImage" />

                                            </div>
                                        </div>

                                        <div className="row ppv_createMatch_wrestlersRow">
                                            <div className="col-md-6">
                                                <div className="selectMatch_wrestlerBox">
                                                    <button class="button-select-superstar dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" >
                                                        {MatchTypeIsChosen ? `${Match1Wrestler1}` : "SELECT MATCH"}
                                                    </button>

                                                    <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton2" id="ppv_match_dropdown">
                                                        {superstars.map((item) => {
                                                            const { id, name, image } = item;
                                                            return (
                                                                <>
                                                                    <a class="dropdown-item ppv_show_selectWrestler" onClick={() => { handleSearch("Match1Wrestler1", name, image) }}>{name}</a>
                                                                </>
                                                            )
                                                        }

                                                        )}

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-6">
                                                <button class="button-select-superstar dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" >
                                                    {MatchTypeIsChosen ? `${Match1Wrestler2}` : "SELECT MATCH"}
                                                </button>

                                                <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton2" id="ppv_match_dropdown">
                                                    {superstars.map((item) => {
                                                        const { id, name } = item;
                                                        return (
                                                            <>
                                                                <a class="dropdown-item ppv_show_selectWrestler" onClick={() => { handleSearch("Match1Wrestler2", name) }}>{name}</a>
                                                            </>
                                                        )
                                                    }

                                                    )}

                                                </div>
                                            </div>
                                        </div>

                                    </div>
 */}


                                </div>

                            </div>


























                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
}

export default MatchModal;
