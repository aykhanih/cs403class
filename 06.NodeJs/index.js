const express = require("express")
const bodyParser = require("body-parser")
require("colors")

const app = express()
app.use(bodyParser.json())

const students = [
    {
        id: 1,
        name: "aykhan"
    },
    {
        id: 2,
        name: "aykhan"
    },
    {
        id: 3,
        name: "aykhan"
    }
]

app.get("/", (req, res) => {
    res.status(200).json(students)
})

const PORT = 7000

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`.bold.green))
