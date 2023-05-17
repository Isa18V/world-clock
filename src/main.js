function updateTime() {
  // Ohio
  let londonElement = document.getElementById("ohio");
  if (londonElement) {
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTime = moment();

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = `${londonTime.format(
      `HH : mm : ss`
    )} <small>${londonTime.format("A")}</small> `;

    // paris
    let parisElement = document.getElementById("paris");
    if (parisElement) {
      let parisTimeElement = parisElement.querySelector(".time");
      let parisDateElement = parisElement.querySelector(".date");
      let parisTime = moment();

      parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
      parisTimeElement.innerHTML = `${parisTime.format(
        `HH : mm : ss`
      )} <small>${parisTime.format("A")}</small> `;
    }
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.getElementById("cities");

  cityElement.innerHTML = `<div class="row city">
                <div class="col-lg-6 col-md-12">
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="col-lg-6 col-md-12 time">${cityTime.format(
                  "HH : mm : ss"
                )}<small>${cityTime.format("A")}</small></div>
            </div>`;
}

let citySelectElement = document.getElementById("city");
citySelectElement.addEventListener("change", updateCity);
