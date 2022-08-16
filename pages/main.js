const url = "http://localhost:5500/api"

// GET
function getClimate() {
  axios.get(url)
    .then(response => {
      console.log(response.data)
      const data = response.data
      apiResult1.textContent = data.climate.temperature
      apiResult2.textContent = data.climate.humidity
      apiResult3.textContent = data.climate.sun
      
    })
    .catch(error => console.error(error))
}

getClimate()

