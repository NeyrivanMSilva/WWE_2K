import mongoose from 'mongoose'
/*i mport validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' */

const tagMatchSchema = new mongoose.Schema(
 
  
  /* Model for the teamTraining */
{
    wrestler1tag1: {
      type: Number,
      required: [true],
    },
    wrestler2tag1: {
      type: String,
      required: [true],
    },
    wrestler1tag2: {
      type: Number,
      required: [true],
    },
    wrestler2tag2: {
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



export default mongoose.model('tagMatch', tagMatchSchema)
