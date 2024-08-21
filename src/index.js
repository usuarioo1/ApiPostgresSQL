import express from 'express'
import { PORT } from './config.js'
import userRoutes from './routes/users.route.js'
const app = express();


app.use(userRoutes)
app.listen(PORT)
console.log('servidor iniciado en el puerto:', PORT);

