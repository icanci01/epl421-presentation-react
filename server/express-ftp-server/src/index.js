const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json()); // support json encoded bodies

app.use(bodyParser.urlencoded({ extended: true }));   // support encoded bodies

app.use("/login", (req, res) => {
  console.log("Received Request!");
  console.log(req.body);
  res.send({
    token: "test123",
  });
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
