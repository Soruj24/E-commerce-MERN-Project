const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000

app.use(morgan('dev'))

app.get("/products", (req, res) => {
    res.send("product is home page")
})


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})