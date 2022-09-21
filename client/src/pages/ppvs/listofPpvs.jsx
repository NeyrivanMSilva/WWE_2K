/* ADD EMPLOYEE PAGE */
import "../../App.css"
import Menu from "../../components/menu.jsx"
import React from "react";
/* import Header from "../components/header";
import Alert from "../components/Alert" */
import { useAppContext } from "../../context/ppvs/appContext.js"
/* import AddPlayerBox from "../../components/Players/addPlayer/addPlayerInfo.jsx"; */
import Sidenav from "../../components/sidenav/sidenav";
import Header from "../../components/header/header";
/* import TeamMembers from "../../components/Players/Squad/teamMembers";
import Stats from "../../components/Players/Squad/Stats"; */
import Ppvs from "../../components/Ppvs/ListofPpvs/ppvs";
import Navbar from "../../components/sidenav/sidenav";
import "../pages.css"
/* import video from "../../../public/background.mp4" */
const ListofPpvs = () => {



    return (
        <>
 
            <video autoPlay muted loop id="myVideo">
                <source src="./background.mp4" type="video/mp4" />
            </video>

            <div className="container-fluid " /* style={{backgroundImage:'url(background2.jpg)'}} */>
                <div className="row">
                    <Navbar />
                    <div className="container-box content"   >

                        <Ppvs />
                    </div>




                </div>

            </div>



        </>

    );
}

export default ListofPpvs;
