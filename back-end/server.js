import cors from "cors"
import express from 'express';
/* import notFoundMiddleware from './middleware/not-found.js'; */
const app = express();
import connectDB from './db/connect.js';


app.use(cors())
app.use(express.json())
 
import ppvsRouter from "./routes/ppv.js";
import singleMatchRouter from "./routes/singleMatch.js"


app.get('/', (req, res) => {
  res.send('BASFUT!')
})

app.use('/ppvs', ppvsRouter)
app.use('/singleMatch', singleMatchRouter)

/* app.use('/teamTraining', teamTrainingRouter) */

const port = process.env.PORT || 5000

const start = async () => {
    try {
      await connectDB(process.env.MONG_URI) 
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };

  start()