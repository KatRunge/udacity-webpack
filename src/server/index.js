var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
require("dotenv").config();

const fetch = require("node-fetch");
// import fetch from "node-fetch";

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;

// console.log(apiUrl);

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

app.post("/testApi", async (req, res) => {
  const inputUrl = req.body.inputUrl;
  const url = await fetch(
    `${baseURL}?key=${apiKey}&url=${inputUrl}&lang=auto&of=json`
  );
  console.log(url);
  // try {
  //   const data = await url.json();
  //   return {
  //     score_tag: data.score_tag,
  //     agreement: data.agreement,
  //     subjectivity: data.subjectivity,
  //     confidence: data.confidence,
  //   };
  // } catch (error) {
  //   console.log("error", error);
  // }
  res.send("data");
});
