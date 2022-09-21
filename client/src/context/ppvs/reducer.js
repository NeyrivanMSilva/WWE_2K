import {
  DISPLAY_ALERT,
  CLEAR_ALERT,

  DISPLAY_ALERT_DUPLICATE_EMAIL,
  DISPLAY_ALERT_EMAIL,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_PPV_BEGIN,
  CREATE_PPV_SUCCESS,
  CREATE_PPV_ERROR,
  GET_PPVS_BEGIN,
  GET_PPVS_SUCCESS,
  SET_EDIT_PPV,
  DELETE_PPV_BEGIN,
  EDIT_PPV_BEGIN,
  EDIT_PPV_SUCCESS,
  EDIT_PPV_ERROR,
  RESET_EDIT_PPV,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  /*  ------------SINGLEMATCH------------ */
  CREATE_SINGLESMATCH_BEGIN,
  CREATE_SINGLESMATCH_SUCCESS,
  CREATE_SINGLESMATCH_ERROR,
  GET_SINGLEMATCHS_BEGIN,
  GET_SINGLEMATCH_SUCCESS,
  SET_EDIT_SINGLEMATCH,
  DELETE_SINGLEMATCH_BEGIN,
  EDIT_SINGLEMATCH_BEGIN,
  EDIT_SINGLEMATCH_SUCCESS,
  EDIT_SINGLEMATCH_ERROR,
  RESET_EDIT_SINGLEMATCH,


} from './actions'

import { useAppContext } from "./appContext.js"


import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Please provide all values",
    }
  }
  if (action.type === DISPLAY_ALERT_EMAIL) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Please provide valid email",
    }
  }
  if (action.type === DISPLAY_ALERT_DUPLICATE_EMAIL) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Inserted email already exists",
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === HANDLE_CHANGE) {

    return {
      ...state,

      [action.payload.inputname]: action.payload.value,
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      developer: false,
      pmanager: false,
      architect: false,
    }

    return {
      ...state,
      ...initialState,
    }
  }
  if (action.type === CREATE_PPV_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === CREATE_PPV_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New PPV Created!',
    }
  }
  if (action.type === CREATE_PPV_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === GET_PPVS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_PPVS_SUCCESS) {
    return {
      ...state,

      ppvs: action.payload.ppvs2,

    }
  }
 
  if (action.type === SET_EDIT_PPV) {
    const PPV = state.PPVs.find((PPV) => PPV._id === action.payload.id)
    const { _id, name, email, password, mobile, architect, developer, pmanager } = PPV
    return {
      ...state,
      isEditing: true,
      editPPVId: _id,
      name,
      email,
      password,
      mobile,
      architect,
      developer,

      pmanager,
    }
  }
  if (action.type === DELETE_PPV_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === EDIT_PPV_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === RESET_EDIT_PPV) {
    return {
      ...state,
      name: "",
      email: "",
      password: "",
      mobile: "",
      pmanager: false,
      developer: false,
      architect: false,
      isEditing: false,
      editPPVId: "",
    }
  }
  if (action.type === EDIT_PPV_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'PPV Updated!',
    }
  }
  if (action.type === EDIT_PPV_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,

    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',

    }
  }


  /*  -------------------TEAMTRAINING------------------ */
  if (action.type === CREATE_SINGLESMATCH_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === CREATE_SINGLESMATCH_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New PPV Created!',
    }
  }
  if (action.type === CREATE_SINGLESMATCH_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }



  throw new Error(`no such action : ${action.type}`)
}

export default reducer
