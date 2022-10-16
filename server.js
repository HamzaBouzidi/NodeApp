import  express  from "express";
import mongoose from "mongoose";
import gameRoutes from './routes/game.route.js';
import { notFoundError,errorHandler } from "./midllewares/error-handler.js";
import morgan from "morgan";


const app = express();
const port = process.env.port || 9090;
const databaseName ='workshop4gamix2122';

mongoose.set('debug', true);

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost:27017/${databaseName}`).then(() => {
    console.log(`connected to ${databaseName}`);
} ).catch(er => console.log(er));

app.use(morgan("dev"))  //morgan


app.use(express.json());
app.use(express.urlencoded({encoded : true}));

app.use('/img',express.static('public/images'));

app.use((req,res,next)=>{
    console.log("Middleware just run!!");
    next();
});


app.use("/gse",(req,res,next)=>{
    console.log("Middleware just run on a gse route!!");
    next();
});




app.use('/game',gameRoutes);
//app.use('/user',userRoutes);

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://hostname:${port}/`);
})