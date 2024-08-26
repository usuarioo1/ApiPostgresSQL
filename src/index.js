import express from 'express'
import { PORT } from './config.js'
import userRoutes from './routes/users.route.js'
import morgan from 'morgan';
const app = express();


app.use(morgan('dev'))
app.use(express.json()) // es para que pueda entender y rpocesar los json que se le pasan por ejemplo a traves de req.ody
app.use(userRoutes)
app.listen(PORT)
console.log('servidor iniciado en el puerto:', PORT);


