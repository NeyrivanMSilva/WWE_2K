/* ADD EMPLOYEE PAGE */
import "../ppvs.css"
import "../../buttons.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/ppvs/appContext.js'
import Alert from "../../Alert.js";
import Show from "./show";
import assets from "../../../dummyData/ppvs.js"
const SelectShowModal = () => {
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
            <div class="modal fade" id="selectShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document" id='modal1'>
                    <div class="modal-content" id='select_Show'>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Adicionar curso</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {assets.map((item) => {
                                const { id, name, image } = item;
                                return (
                                    <>
                                        <Show image={image} />
                                    </>
                                )
                            }

                            )}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}

export default SelectShowModal;
