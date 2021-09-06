var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
require("dotenv").config();

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;

// console.log(apiUrl);

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

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

// app.post("/testApi", async function (req, res) {
//   const inputUrl = req.body.inputUrl;

//   const data = await getApiURL(inputUrl);
//   res.json(data);
// });

// async function getApiURL(inputUrl) {
//   const apiURL = `${baseURL}?key=${apiKey}&of=json&url=${inputUrl}&lang=auto`;
//   console.log(apiURL);
//   try {
//     const res = await fetch(apiURL);
//     const data = await res.json();

//     return {
//       score_tag: data.score_tag,
//       agreement: data.agreement,
//       subjectivity: data.subjectivity,
//       confidence: data.confidence,
//     };
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

app.post("/testApi", async (req, res) => {
  const inputUrl = req.body.inputUrl;
  const url = await fetch(
    `${baseURL}?key=${apiKey}&url=${inputUrl}&lang=auto&of=json`
  );
  console.log(url);
  try {
    const data = await url.json();
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});
