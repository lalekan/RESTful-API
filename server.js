// Import Dependencies
const express = require("express")

const app = express()

const PORT = 3000
let total = 0

// Get route
app.get('/calculator', (req, res) => {
    res.status(200).json({total})
})

app.use(express.json())

app.post('/calculator', (req, res) => {
    const number  = req.body.number
    const operation = req.body.operation

    if (operation === 'add') {
        total += number
    } else if (operation === 'subtract') {
        total -= number
    } else if (operation === 'multiply') {
        total *= number
    } else if (operation === 'divide') {
        total /= number
    } else {
        return res.json({ error: 'Invalid Operation'})
    }
    res.status(200).json({total})
})

app.delete('/calculator', (req, res) => {
    total = 0
    res.status(200).json({total, msg: "Total Reset"})
})
// Listener
app.listen(PORT, () => console.log(`Express is listening on port: ${PORT}`))