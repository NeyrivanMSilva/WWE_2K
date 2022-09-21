import express from 'express'


const ppvsRouter = express.Router()
import {
  createPPV,
  getPPVs,
 
} from '../controllers/ppv.js'

ppvsRouter.route('/').post(createPPV).get(getPPVs)
/* playersRouter.route('/stats').get(showStats) */

/* router.route('/:id').get(getEmployee).delete(deleteEmployee).patch(updateEmployee) */

export default ppvsRouter
