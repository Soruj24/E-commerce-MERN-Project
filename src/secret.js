require("dotenv").config();
const PORT = process.env.SERVER_PORT
const mongodbURL = process.env.MONGODB_ATLAS_URL ||" mongodb://localhost:27017/ecommerceMernDb2024"
const defaultImage = "../public/images/users/logo.png"

module.exports = {
    PORT,
    mongodbURL,
    defaultImage
}