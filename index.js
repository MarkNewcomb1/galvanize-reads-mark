const app = require("./app");
const port = process.env.PORT || 3000;
cors = require("cors");
app.use(cors());
app.listen(port)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));