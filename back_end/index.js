const express = require('express')
const moogoose = require('mongoose')
const cookieParser = require('cookie-parser');
const authRoute = require('./route/AuthRoute')
const sellerRoute = require('./route/SellerRoute')
const bidderRoute = require('./route/BidderRoute')
const adminRoute = require('./route/AdminRoute')
const userRoute = require('./route/UserRoute')


const session = require('express-session');
const passport = require('passport');
const userVerification = require('./Middleware/Middleware')

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
app.use('/admin', adminRoute);

app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
// app.use(express.json())
app.use(cookieParser())


// app.use('/', authRoute)
console.log(typeof userVerification)
app.use('/bid', bidderRoute)
app.use('/user/', userRoute)

