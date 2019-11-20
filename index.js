// eHZbXQ8gCR7XYYzw3n7k93nWzsQdch5hpIg9oVD1
// console.log("eHZbXQ8gCR7XYYzw3n7k93nWzsQdch5hpIg9oVD1")


// function reqListener () {
//   const myJson = JSON.parse(this.responseText);
//   const mostRecentSol = myJson['sol_keys'][6];
//   console.log(myJson[mostRecentSol]);
// }

const apiURL = "https://api.nasa.gov/insight_weather/?api_key=eHZbXQ8gCR7XYYzw3n7k93nWzsQdch5hpIg9oVD1&feedtype=json&ver=1.0";


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", marsAPI);
oReq.open("GET", apiURL);
oReq.send();



// //from Gareth
// function reqListener () {
//   const myJson = JSON.parse(this.responseText);
//   let amountOfSols = myJson['sol_keys'].length;
//   if(amountOfSols == 0){
//     console.log("No sols today.")
//     return; // stop
//   }
//   // Always select the highest index (i.e. the most recent sol)
//   const mostRecentSol = myJson['sol_keys'][amountOfSols-1];
//   console.log(myJson[mostRecentSol]['HWS']['mx']);
// }





//this function returns select parts of the data and then displays them
function marsAPI () {

  // const myJSON = JSON.parse(this.responseText);


  const myJSON = JSON.parse(this.responseText);

  //find length of sol_keys
  let amountOfSols = myJSON['sol_keys'].length;

  // if(amountOfSols == 0){
  //   console.log("No sols today.")
  //   return; // stop
  // }

  //otherwise....
  // Always select the highest index (i.e. the most recent sol)
  //-1 as count begins from 0 so if 7 Sols, amountOfSols will select '6' as 7-1 = 6.
  //select Sol to take
  const mostRecentSol = myJSON['sol_keys'][amountOfSols-1];


  //display Sol number
  //adjust this to respond to data feed
  // const todaySol = myJSON['sol_keys']['5'];

  //always choose latest Sol number to display
  let solKeys = myJSON['sol_keys'];
  const latestSol = solKeys[solKeys.length-1];
  console.log(latestSol);


  //AT = atmospheric temperature (per-sol)
  // var degr = "°C";
  const avTemp = myJSON[mostRecentSol]['AT']['av'];
  const minTemp = myJSON[mostRecentSol]['AT']['mn'];
  const maxTemp = myJSON[mostRecentSol]['AT']['mx'];

  //HWS = horizontal wind speed (per-sol)
  const minWind = myJSON[mostRecentSol]['HWS']['mn'];
  const avWind = myJSON[mostRecentSol]['HWS']['av'];
  const maxWind = myJSON[mostRecentSol]['HWS']['mx'];

  //PRE = atmospheric pressure (per-sol)
  const minPre = myJSON[mostRecentSol]['PRE']['mn'];
  const avPre = myJSON[mostRecentSol]['PRE']['av'];
  const maxPre = myJSON[mostRecentSol]['PRE']['mx'];

  //season
  const seas0n = myJSON[mostRecentSol]['Season'];


  //see if data is coming through
  // console.log(myJSON[mostRecentSol]);
  console.log(avTemp);
  console.log(seas0n);
  console.log(myJSON[mostRecentSol]);


  //display Sol
  document.getElementById("day").innerHTML = latestSol;

  //season
  document.getElementById("Ceason").innerHTML = seas0n;

  //temp
  document.getElementById("minTemp").innerHTML = minTemp;
  document.getElementById("avTemp").innerHTML = avTemp;
  document.getElementById("maxTemp").innerHTML = maxTemp;

  //wind
  document.getElementById("minWind").innerHTML = minWind;
  document.getElementById("avWind").innerHTML = avWind;
  document.getElementById("maxWind").innerHTML = maxWind;

  //wind
  document.getElementById("minPre").innerHTML = minPre;
  document.getElementById("avPre").innerHTML = avPre;
  document.getElementById("maxPre").innerHTML = maxPre;

}
