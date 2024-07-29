const express = require('express')
const mongoose = require("mongoose") 
const bodyParser = require('body-parser');
const cors = require('cors');
const UserRouter=require("./src/routes/userRoute")
const AuthRouter = require("./src/routes/authRouter");
const OtherRoutes= require("./src/routes/otherRoutes")

require('dotenv').config();

const app = express()
const port = process.env.PORT;
const key = process.env.KEY;

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

app.use("/" , AuthRouter)
app.use("/" ,OtherRoutes)
app.use("/users" ,UserRouter )



mongoose.connect(process.env.DB_SECRET_KEY)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Not Connected!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})