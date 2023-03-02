import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js'
import clubRoutes from './routes/club.js'
import financeRoutes from './routes/finance.js'
import magazineRoutes from './routes/magazine.js'
import injuryRoutes from './routes/injury.js'
import scheduleRoutes from './routes/schedule.js'

const app = express();

app.use(express.json()); // allow to use content type of aplication. It parses incoming JSON requests and puts the parsed data in req.
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());  // Calling use(cors()) will enable the express server to respond to preflight requests.
app.use('/users', userRoutes)
app.use('/clubs', clubRoutes)
app.use('/finance', financeRoutes)
app.use('/magazine', magazineRoutes)
app.use('/injury', injuryRoutes)
app.use('/schedule', scheduleRoutes)
const PORT = process.env.PORT || 5000

mongoose.connect("mongodb+srv://johnnyw:haslo@zks-app.0yevc.mongodb.net/?retryWrites=true&w=majority", ({
  useNewUrlParser: true,
  useUnifiedTopology: true
}))
  .then(() => app.listen(PORT, () => console.log('Server running')))
  .catch(console.error)
