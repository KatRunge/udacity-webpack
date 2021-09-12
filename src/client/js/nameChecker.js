function checkForName(inputUrl) {
  console.log("::: Running checkForName :::", inputUrl);
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputUrl)) {
    alert("Welcome, Captain!");
  }
}

export { checkForName };
