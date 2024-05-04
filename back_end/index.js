const express = require('express')
const moogoose = require('mongoose')
const authRoute = require('./route/AuthRoute')
const sellerRoute = require('./route/SellerRoute')
const bidderRoute = require('./route/BidderRoute')
const adminRoute = require('./route/AdminRoute')
const app = express()
const cors = require('cors')
require('dotenv').config()
const{MONGO_URL, APP_PORT} = process.env

moogoose.connect(
    MONGO_URL)
    .then(() => {
        console.log("Connect to MongoDB successfully")
    }).catch((err)=> {
        console.error(err)
    })
app.listen(APP_PORT, () => {
    console.log(`Server running on port ${APP_PORT}`)
})

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credential: true,
    })
)

app.use(express.json());
app.use('/', authRoute);
app.use('/seller', sellerRoute);
app.use('/bidder', bidderRoute);
app.use('/adming', adminRoute);

