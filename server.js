const express = require('express')
const cors = require('cors');
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser');
const authRouter = require('./src/routes/auth.route');
const productRouter = require('./src/routes/product.route');
const PORT = 5000;
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use("/api/auth/", authRouter);
app.use("/api/product/", productRouter);


app.get('/', (req, res)=>{
    res.send('working')
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})