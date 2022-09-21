import mongoose from 'mongoose'
/*i mport validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' */

const ppvSchema = new mongoose.Schema(
 
  
  /* Model for the teamTraining */
{
    name: {
      type: String,
      required: [true],
    },
    image: {
      type: String,
      required: [true],
    },

     year: {
      type: String,
      required: [true],
    },
   
   },
  { timestamps: true }
)



export default mongoose.model('Ppv', ppvSchema)
