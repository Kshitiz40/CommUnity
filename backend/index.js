const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

console.log(PORT)
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res)=>{
    res.send('working')
})

app.listen(PORT,()=>{
    console.log(`Server running at port : ${PORT}`);
});