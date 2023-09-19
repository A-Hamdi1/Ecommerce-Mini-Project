const app = require("express")(),
  bodyParser = require("body-parser").json(),
  morgan = require("morgan")("dev"),
  dotenv = require("dotenv").config(),
  cors = require("cors")({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
  mongoose = require("mongoose"),
  cookieParser = require("cookie-parser")(),
  { PORT = 5000 } = process.env;
mongoose.connect(process.env.DATABASE_URL);
app.use(bodyParser, morgan, cors, cookieParser);
app.use("/auth", require("./controllers"));
app.use("/api", require("./controllers"));

const sendMail = require("./contact");

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await sendMail(name, email, message);
    if (result) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(PORT);
