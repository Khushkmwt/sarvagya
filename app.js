import express from "express";
import ejsmate from "ejs-mate"
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/',(req,res) =>{
    res.render("home/home.ejs")
})
import sahityaRouter from "./routes/sahitya.route.js"
app.use("/sahitya",sahityaRouter)
export {app}