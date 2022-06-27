const express = require("express");
const envRouter = require("./routes/envelopeRouter");

const app = express();
app.use(express.json());

app.use("/api/v1/envelopes", envRouter);

app.listen(4000, () => {
  console.log("App running on port 4000!");
});