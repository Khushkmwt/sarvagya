import dotenv from 'dotenv'
import { app } from './app.js'
dotenv.config({
    path: './.env'
})
app.listen(process.env.PORT || 8080, (req,res) => {
    console.log('Server is running on port 8080');
})