var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
require("dotenv").config();
const fetch = require("node-fetch");
// import fetch from "node-fetch";

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //   res.sendFile(path.resolve("dist/index.html"));
});

const cors = require("cors");
app.use(cors());

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.json(mockAPIResponse);
});

// post request
app.post("/results", async function (req, res) {
  const inputUrl = req.body.inputUrl;
  const mainUrl = await fetch(
    `${baseURL}?key=${apiKey}&url=${inputUrl}&lang=auto&of=json`
  );
  try {
    const data = await mainUrl.json();
    console.log(data.subjectivity);
    res.send(data);
    // data to be returned in "results"
    return {
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      confidence: data.confidence,
    };
  } catch (error) {
    console.log("error", error);
  }
});