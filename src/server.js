const app = require("../app");
const connectDB = require("./config/db");
const { PORT } = require("./secret");

app.listen(PORT,async () => {
  console.log(`server is running at http://localhost:${PORT}`);
 await connectDB();
});
