let dataPlayerArray = [];
async function fetchPlayerData() {
  try {
    const response = await fetch("cars.json");
    const data = await response.json();
    dataPlayerArray.push(data);
    return dataPlayerArray;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
async function getListPlayer() {
  let data = await fetchPlayerData();
  // let temp = [];
  // temp = data[0].leagues.map(league => league.clubs)
  console.log(data);
}
getListPlayer();
