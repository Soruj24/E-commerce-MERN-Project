const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/products", (req, res) => {
    res.send("product is home page")
})

// error handler
app.use((err, req, res, next) => {
    res.status(400).send(err.message)
  })


// server err 
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
  
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})