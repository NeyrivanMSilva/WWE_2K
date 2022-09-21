import mongoose from 'mongoose'
/*i mport validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' */

const tripleMatchSchema = new mongoose.Schema(
 
  
  /* Model for the teamTraining */
{
    wrestler1: {
      type: Number,
      required: [true],
    },
    wrestler2: {
      type: String,
      required: [true],
    },
    wrestler3: {
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



export default mongoose.model('tripleMatch', tripleMatchSchema)
