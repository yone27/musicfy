const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/");
const app = express();

// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Routes
app.use(users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
