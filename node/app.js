import express from "express"
import cors from "cors"
import bd from "../bd/bd.js"
import rutinesRouter from "./routes/router.js"

const app = express()

// hello world

app.get("/", (req, res) => {
  res.send("Hello world")
})

// config
app.use(cors())
app.use(express.json())
app.use("/rutines", rutinesRouter)

// try connect to db

try {
  bd.authenticate()
  console.log("Connection has been established successfully.")
} catch (err) {
  console.error("Unable to connect to the database:", err)
}

// listen port

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})
