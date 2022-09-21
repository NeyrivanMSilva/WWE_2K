/* ADD EMPLOYEE PAGE */
import "../pages.css"
import Menu from "../../components/menu.jsx"
import React from "react";
/* import Header from "../components/header";
import Alert from "../components/Alert" */
import { useAppContext } from "../../context/ppvs/appContext.js"
/* import AddPlayerBox from "../../components/Players/addPlayer/addPlayerInfo"; */
import Sidenav from "../../components/sidenav/sidenav";
import Header from "../../components/header/header";
import Navbar from "../../components/sidenav/sidenav";
import AddPpvBox from "../../components/Ppvs/addPpv/addPpv";

const AddPpv = () => {



    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src="./background.mp4" type="video/mp4" />
            </video>

            <div className="container-fluid " /* style={{backgroundImage:'url(background2.jpg)'}} */>
                <div className="row">
                    <Navbar />
                    <div className="container-box content "   >

                        <AddPpvBox />
                    </div>




                </div>

            </div>

        </>

    );
}

export default AddPpv;
