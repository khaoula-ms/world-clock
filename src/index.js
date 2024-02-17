setInterval(() => {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");

  losAngelesDate.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do, YYYY");
  losAngelesTime.innerHTML = `${moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss")} <small>${moment()
    .tz("America/Los_Angeles")
    .format("A")}</small>`;
}, 1000);
setInterval(() => {
  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTime = sydney.querySelector(".time");

  sydneyDate.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do, YYYY");
  sydneyTime.innerHTML = `${moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss")} <small>${moment()
    .tz("Australia/Sydney")
    .format("A")}</small>`;
}, 1000);
