function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let inputUrl = document.getElementById("input").value;

  if (Client.checkForUrl(inputUrl)) {
    console.log("::: Form Submitted :::");
  } else {
    alert("error validate url");
  }

  fetch("http://localhost:8081/results", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inputUrl: inputUrl }),
  })
    .then((res) => res.json())
    .then(function (res) {
      console.log(res);
      try {
        document.getElementById("agreement").innerHTML = res.agreement;
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        document.getElementById("confidence").innerHTML = res.confidence;
      } catch (error) {
        console.log("error", error);
      }
    });
}

export { handleSubmit };
