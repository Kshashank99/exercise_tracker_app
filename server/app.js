require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6dtmr.mongodb.net/ExerciseTracker?retryWrites=true&w=majority`;

mongoose.connect(
	uri,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(error) => {
		if (error) {
			console.log(error);
		} else {
			console.log("Database connected successfully!");
		}
	}
);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes middlewares
const authRouter = require("./routes/auth.js");
const userRouter = require("./routes/user.js");
const foodRouter = require("./routes/food.js")
const exerciseRouter = require("./routes/exercise.js")

app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api",foodRouter);
app.use("/api",exerciseRouter);

app.get("/", (req, res) => {
	res.end("chalu h madarchod!");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server started and running on port ${port}`);
});
