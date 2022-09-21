import mongoose from 'mongoose'
/*i mport validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' */

const singleMatchSchema = new mongoose.Schema(
 
  
  /* Model for the teamTraining */
{
  ppvId: {
    type: String,
    required: [true],
  },
    wrestler1: {
      type: String,
      required: [true],
    },
    wrestler2: {
      type: String,
      required: [true],
    },

     winner: {
      type: String,
      required: [true],
    },
    title: {
      type: String,
      required: [true],
    },
    type: {
      type: String,
      required: [true],
    },
   },
  { timestamps: true }
)



export default mongoose.model('SingleMatch', singleMatchSchema)
