/* FUNCTIONS */

import React, { useReducer, useContext, useEffect } from 'react'
import reducer from './reducer.js'
import axios from 'axios'
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
  
 /*  ------------TAGTEAM------------ */
 CREATE_TAGTEAM_BEGIN,
 CREATE_TAGTEAM_SUCCESS,
 CREATE_TAGTEAM_ERROR,
 
  /*  ------------TRIPLE THREAT------------ */
  CREATE_TRIO_BEGIN,
  CREATE_TRIO_SUCCESS,
  CREATE_TRIO_ERROR,

   /*  ------------FATAL FOUR WAY------------ */
   CREATE_FATALFOUWAY_BEGIN,
   CREATE_FATALFOUWAY_SUCCESS,
   CREATE_FATALFOUWAY_ERROR,

    /*  ------------FATAL FIVE WAY------------ */
    CREATE_FATALFIVEWAY_BEGIN,
    CREATE_FATALFIVEWAY_SUCCESS,
    CREATE_FATALFIVEWAY_ERROR,

   /*  ------------SIXMAN------------ */
   CREATE_SIXMAN_BEGIN,
   CREATE_SIXMAN_SUCCESS,
   CREATE_SIXMAN_ERROR,



} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState = {

  showAlert: false,
  alertText: "",
  alertType: "",
  isEditing: false,
  /*  --------SHOWS-------- */

  currentlyWorkingOn: "",
  ppvs: [],
  matchNumber: "",

  searchYear: 0,
  /*  --------CREATE A SHOW-------- */
  ppv: "",
  image: "",




  /*  --------CURRENT MATCH-------- */
  ppvId:"",
  MatchType: "",
  MatchMatchType: "",
  MatchWrestler1: "",
  MatchWrestler1Image: "",
  MatchWrestler2: "",
  MatchWrestler2Image: "",
  MatchWrestler3: "",
  MatchWrestler3Image: "",
  MatchWrestler4: "",
  MatchWrestler4Image: "",
  MatchWrestler5: "",
  MatchWrestler5Image: "",
  MatchWrestler6: "",
  MatchWrestler6Image: "",
  MatchTitle: "",
  Winner: "",
  MatchNumber:"",
  /*  --------MATCH1-------- */
  ppvId1: "",
  Match1Wrestler1: "",
  Match1Wrestler2: "",
  Match1Wrestler3: "",
  Match1Wrestler4: "",
  Match1Wrestler5: "",
  Match1Wrestler6: "",
  winner1: "",
  title1: "",
  type1: "",
  number1: "",
  Winner1: "",
  /*  --------MATCH2-------- */
  ppvId2: "",
  Match2Wrestler1: "",
  Match2Wrestler2: "",
  Match2Wrestler3: "",
  Match2Wrestler4: "",
  Match2Wrestler5: "",
  Match2Wrestler6: "",
  winner2: "",
  title2: "",
  type2: "",
  number2: "",
  Winner2: "",
  /*  --------MATCH3-------- */
  ppvId3: "",
  Match3Wrestler1: "",
  Match3Wrestler2: "",
  Match3Wrestler3: "",
  Match3Wrestler4: "",
  Match3Wrestler5: "",
  Match3Wrestler6: "",
  winner3: "",
  title3: "",
  type3: "",
  number3: "",
  Winner3: "",
  /*  --------MATCH4-------- */
  ppvId4: "",
  Match4Wrestler1: "",
  Match4Wrestler2: "",
  Match4Wrestler3: "",
  Match4Wrestler4: "",
  Match4Wrestler5: "",
  Match4Wrestler6: "",
  winner4: "",
  title4: "",
  type4: "",
  number4: "",
  Winner4: "",
  /*  --------MATCH5-------- */
  ppvId5: "",
  Match5Wrestler1: "",
  Match5Wrestler2: "",
  Match5Wrestler3: "",
  Match5Wrestler4: "",
  Match5Wrestler5: "",
  Match5Wrestler6: "",
  winner5: "",
  title5: "",
  type5: "",
  number5: "",
  Winner5: "",
  /*  --------MATCH6-------- */
  ppvId6: "",
  Match6Wrestler1: "",
  Match6Wrestler2: "",
  Match6Wrestler3: "",
  Match6Wrestler4: "",
  Match6Wrestler5: "",
  Match6Wrestler6: "",
  winner6: "",
  title6: "",
  type6: "",
  number6: "",
  Winner6: "",
  /*  --------MATC7-------- */
  ppvId7: "",
  Match7Wrestler1: "",
  Match7Wrestler2: "",
  Match7Wrestler3: "",
  Match7Wrestler4: "",
  Match7Wrestler5: "",
  Match7Wrestler6: "",
  winner7: "",
  title7: "",
  type7: "",
  number7: "",
  Winner7: "",
  /*  --------MATCH8-------- */
  ppvId8: "",
  Match8Wrestler1: "",
  Match8Wrestler2: "",
  Match8Wrestler3: "",
  Match8Wrestler4: "",
  Match8Wrestler5: "",
  Match8Wrestler6: "",
  winner8: "",
  title8: "",
  type8: "",
  number8: "",
  Winner8: "",
  /*  --------MATCH9-------- */
  ppvId9: "",
  Match9Wrestler1: "",
  Match9Wrestler2: "",
  Match9Wrestler3: "",
  Match9Wrestler4: "",
  Match9Wrestler5: "",
  Match9Wrestler6: "",
  winner9: "",
  title9: "",
  type9: "",
  number9: "",
  Winner9: "",
  /*  --------MATCH10-------- */
  ppvId10: "",
  Match10Wrestler1: "",
  Match10Wrestler2: "",
  Match10Wrestler3: "",
  Match10Wrestler4: "",
  Match10Wrestler5: "",
  Match10Wrestler6: "",
  winner10: "",
  title10: "",
  type10: "",
  number10: "",
  Winner10: "",


}




const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  /*  ----------------PPV-------------------- */

  const ppvsFetch = axios.create({
    baseURL: 'http://localhost:5000/ppvs',
  })
  const setEdit = () => {
    dispatch({
      type: RESET_EDIT_PPV,
    })
  }
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }
  const handleChange = ({ inputname, value }) => {


    dispatch({ type: HANDLE_CHANGE, payload: { inputname, value } })
  }
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }
  const createPpv = async () => {
    dispatch({ type: CREATE_PPV_BEGIN })
    try {
      const { name, image, year } = state
      await ppvsFetch.post('', {
        name,
        image,
        year
      })

      dispatch({ type: CREATE_PPV_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_PPV_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const getPpvs = async () => {
    const { searchYear } = state

    let url = 'http://localhost:5000/ppvs'
    if (searchYear) {
      url = url + `?year=${searchYear}`
    }
    dispatch({ type: GET_PPVS_BEGIN })
    try {
      const data = await fetch(url)

      const ppvs2 = await data.json()


      dispatch({
        type: GET_PPVS_SUCCESS,
        payload: {
          ppvs2,

        },

      })

    } catch (error) {

    }
    clearAlert()
      ;

  }
  const setEditPpv = (id) => {
    handleChange("id", id)

    dispatch({ type: SET_EDIT_PPV, payload: { id } })
  }
  const editPpv = async () => {
    dispatch({ type: EDIT_PPV_BEGIN })

    /* try {
      const { name, email, password, mobile, pmanager, developer, architect } = state
      await ppvsFetch.patch(`${state.editPLAYERId}`, {
        name,
        email,
        password,
        mobile,
        pmanager,
        developer,
        architect
      })
      dispatch({ type: EDIT_PLAYER_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: EDIT_PLAYER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    } */
    clearAlert()
  }
  const deletePpv = async (/* PLAYERId */) => {
    /*  dispatch({ type: DELETE_PLAYER_BEGIN })
     try {
       await ppvsFetch.delete(`/${PLAYERId}`)
       getPlayers()
     } catch (error) {
 
     } */
  }
  const showStats = async () => {
    /*  dispatch({ type: SHOW_STATS_BEGIN })
     try {
       const { data } = await ppvsFetch('/stats')
       console.log(data);
       dispatch({
         type: SHOW_STATS_SUCCESS,
         payload: {
           stats: data.defaultStats,
 
         },
       })
     } catch (error) {
 
     }
     clearAlert() */
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  /*  -------------------SINGLES MATCH------------------ */


  const createSinglesMatch = async () => {
    dispatch({ type: CREATE_SINGLESMATCH_BEGIN })
    try {
      const { ppvId,MatchType, MatchMatchType, MatchWrestler1, MatchWrestler1Image, MatchWrestler2, MatchWrestler2Image, MatchTitle, Winner,MatchNumber } = state
      await ppvsFetch.post('', {
        ppvId,
        MatchType,
        MatchMatchType,
        MatchWrestler1,
        MatchWrestler1Image,
        MatchWrestler2,
        MatchWrestler2Image,
        MatchTitle,
        Winner,
        MatchNumber


      })

      dispatch({ type: CREATE_SINGLESMATCH_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_SINGLESMATCH_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }


  const createTagTeamMatch = async () => {
    dispatch({ type: CREATE_TAGTEAM_BEGIN })
    try {
      const { ppvId,MatchType, MatchMatchType, MatchWrestler1, MatchWrestler1Image, MatchWrestler2, MatchWrestler2Image,MatchWrestler3, MatchWrestler3Image, MatchWrestler4, MatchWrestler4Image, MatchTitle, Winner,MatchNumber } = state
      await ppvsFetch.post('', {
        ppvId,
        MatchType,
        MatchMatchType,
        MatchWrestler1,
        MatchWrestler1Image,
        MatchWrestler2,
        MatchWrestler2Image,
        MatchWrestler3,
        MatchWrestler3Image,
        MatchWrestler4,
        MatchWrestler4Image,
        MatchTitle,
        Winner,
        MatchNumber


      })

      dispatch({ type: CREATE_TAGTEAM_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_TAGTEAM_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }


  const createTripleThreatMatch = async () => {
    dispatch({ type: CREATE_TRIO_BEGIN })
    try {
      const { ppvId,MatchType, MatchMatchType, MatchWrestler1, MatchWrestler1Image, MatchWrestler2, MatchWrestler2Image,MatchWrestler3, MatchWrestler3Image ,MatchWrestler4, MatchWrestler4Image , MatchTitle, Winner,MatchNumber } = state
      await ppvsFetch.post('', {
        ppvId,
        MatchType,
        MatchMatchType,
        MatchWrestler1,
        MatchWrestler1Image,
        MatchWrestler2,
        MatchWrestler2Image,
        MatchWrestler3,
        MatchWrestler3Image,
        MatchWrestler4,
        MatchWrestler4Image,
        MatchTitle,
        Winner,
        MatchNumber


      })

      dispatch({ type: CREATE_TRIO_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_TRIO_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }


  const createFatalFourWayMatch = async () => {
    dispatch({ type: CREATE_FATALFOUWAY_BEGIN })
    try {
      const { ppvId,MatchType, MatchMatchType, MatchWrestler1, MatchWrestler1Image, MatchWrestler2, MatchWrestler2Image,MatchWrestler3, MatchWrestler3Image, MatchWrestler4, MatchWrestler4Image, MatchTitle, Winner,MatchNumber } = state
      await ppvsFetch.post('', {
        ppvId,
        MatchType,
        MatchMatchType,
        MatchWrestler1,
        MatchWrestler1Image,
        MatchWrestler2,
        MatchWrestler2Image,
        MatchWrestler3,
        MatchWrestler3Image,
        MatchWrestler4,
        MatchWrestler4Image,
        MatchTitle,
        Winner,
        MatchNumber


      })

      dispatch({ type: CREATE_FATALFOUWAY_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_FATALFOUWAY_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }


  const createFatalFiveWayMatch = async () => {
    dispatch({ type: CREATE_FATALFIVEWAY_BEGIN })
    try {
      const { ppvId,MatchType, MatchMatchType, MatchWrestler1, MatchWrestler1Image, MatchWrestler2, MatchWrestler2Image,MatchWrestler3, MatchWrestler3Image, MatchWrestler4, MatchWrestler4Image,MatchWrestler5, MatchWrestler5Image, MatchTitle, Winner,MatchNumber } = state
      await ppvsFetch.post('', {
        ppvId,
        MatchType,
        MatchMatchType,
        MatchWrestler1,
        MatchWrestler1Image,
        MatchWrestler2,
        MatchWrestler2Image,
        MatchWrestler3,
        MatchWrestler3Image,
        MatchWrestler4,
        MatchWrestler4Image,
        MatchWrestler5,
        MatchWrestler5Image,
        MatchTitle,
        Winner,
        MatchNumber


      })

      dispatch({ type: CREATE_FATALFIVEWAY_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_FATALFIVEWAY_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const createSixManMatch = async () => {
    dispatch({ type: CREATE_SIXMAN_BEGIN })
    try {
      const { ppvId,MatchType, MatchMatchType, MatchWrestler1, MatchWrestler1Image, MatchWrestler2, MatchWrestler2Image,MatchWrestler3, MatchWrestler3Image, MatchWrestler4, MatchWrestler4Image,MatchWrestler5, MatchWrestler5Image,MatchWrestler6, MatchWrestler6Image, MatchTitle, Winner,MatchNumber } = state
      await ppvsFetch.post('', {
        ppvId,
        MatchType,
        MatchMatchType,
        MatchWrestler1,
        MatchWrestler1Image,
        MatchWrestler2,
        MatchWrestler2Image,
        MatchWrestler3,
        MatchWrestler3Image,
        MatchWrestler4,
        MatchWrestler4Image,
        MatchWrestler5,
        MatchWrestler5Image,
        MatchWrestler6,
        MatchWrestler6Image,
        MatchTitle,
        Winner,
        MatchNumber


      })

      dispatch({ type: CREATE_SIXMAN_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_SIXMAN_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }




  useEffect(() => {
    getPpvs()
    /*  getAttackingPlayers()
     getMidfieldPlayers()
     getDefensivePlayers()
     getGoalkeeperPlayers() */
    showStats()

  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,

        handleChange,
        clearValues,
        createPpv,
        getPpvs,
        createSinglesMatch,
        createTagTeamMatch,
        createTripleThreatMatch,
        createFatalFourWayMatch,
        createFatalFiveWayMatch,
        createSixManMatch,
        showStats,
        setEdit,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}




const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }