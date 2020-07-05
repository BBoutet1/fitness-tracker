const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected To Mongo DataBase");
}).catch((err) => {
    console.log("DataBase Connection Error " + err);
});

// routes
app.use(require("./public/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});