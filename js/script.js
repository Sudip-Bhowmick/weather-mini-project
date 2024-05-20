const apiKey = "b8faea8b4a1a97a2424dc8e6f81ab4fc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector("#search_box");

async function getData(searchValue){
    const response = await fetch(apiUrl + `&q=${searchValue}&appid=${apiKey}`)
    var data = await response.json();
    // console.log(data)    

    var clutter = "";
    if(response.status == 404){
        clutter += `<div class="error">Invalid city name</div>`
        document.querySelector(".display_data").innerHTML = clutter
    }
    else if(searchBox.value == ""){
        clutter += `<div class="error">Please enter a city name</div>`
        document.querySelector(".display_data").innerHTML = clutter
    }
    else{
        clutter += `<div class="degree">${Math.round(data.main.temp)} °C</div><div class="city">${data.name}, ${data.sys.country}</div>`
        document.querySelector(".display_data").innerHTML = clutter
    }
}

document.querySelector(".search_icon").addEventListener("click", ()=>{
    var searchValue = searchBox.value;
    console.log(searchValue)
    getData(searchValue)
})