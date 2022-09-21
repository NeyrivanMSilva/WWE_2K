import express from 'express'


const singleMatchRouter = express.Router()
import {
  createSinglesMatch,
  getsingleMatches
 
} from '../controllers/singleMatch.js'

singleMatchRouter.route('/').post(createSinglesMatch).get(getsingleMatches)
/* playersRouter.route('/stats').get(showStats) */

/* router.route('/:id').get(getEmployee).delete(deleteEmployee).patch(updateEmployee) */

export default singleMatchRouter
