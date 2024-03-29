setInterval(() => {
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles) {
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
  }
}, 1000);
setInterval(() => {
  let sydney = document.querySelector("#sydney");
  if (sydney) {
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
  }
}, 1000);
setInterval(() => {
  let seoul = document.querySelector("#seoul");
  if (seoul) {
    let seoulDate = seoul.querySelector(".date");
    let seoulTime = seoul.querySelector(".time");

    seoulDate.innerHTML = moment().tz("Asia/Seoul").format("MMMM Do, YYYY");
    seoulTime.innerHTML = `${moment()
      .tz("Asia/Seoul")
      .format("h:mm:ss")} <small>${moment()
      .tz("Asia/Seoul")
      .format("A")}</small>`;
  }
}, 1000);
function updateCity(event) {
  let cityTime = event.target.value;
  if (cityTime === "current") {
    cityTime = moment.tz.guess();
  }
  let cityName = cityTime.replace(`_`, ` `).split(`/`)[1];
  let cityTimeZone = moment().tz(cityTime);
  let cityElement = document.querySelector("#attached-cities");
  cityElement.innerHTML = `
    <div class="city" >
          <div class="city-name">
            <h2>${cityName}</h2>
            <div class="date">${cityTimeZone.format("MMM Do,YYYY")}</div>
          </div>
          <div class="time">${cityTimeZone.format(
            "h:mm:ss"
          )} <small>${cityTimeZone.format("A")}</small></div>
        </div> <a href="/">All cities</a>`;
}

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", updateCity);
