function updateTime() {
  // london
  let londonElement = document.getElementById("london");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTime = moment();

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(
    `HH : mm : ss`
  )} <small>${londonTime.format("A")}</small> `;

  // paris
  let parisElement = document.getElementById("paris");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTime = moment();

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    `HH : mm : ss`
  )} <small>${parisTime.format("A")}</small> `;
}

updateTime();
setInterval(updateTime, 1000);
