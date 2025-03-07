require("dotenv").config()
const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())
const PORT = process.env.PORT

const adminAuth = require("./routes/adminAuth")
const connectDB = require("./config/db")
const authRoutes = require("./routes/auth")
const productRoutes= require("./routes/productRoutes")

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
connectDB()

app.use("/api/auth", authRoutes)
app.use("/admin", adminAuth);
app.use("/api/product",productRoutes)


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))