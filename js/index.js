//search fumction
    function search(){
        var inputValue = document.querySelector("#inputValue").value;
        if (!inputValue) {
            inputValue = "Egypt"; // default value
        }
        return inputValue;
    }
//function to fetch data
async function getWeather(inputValue){
    var res=await fetch(`https://api.weatherapi.com/v1//forecast.json?key=944f1826f5cc400cb30133325242806&q=${inputValue}&days=3`)
    var data=await res.json()
    return data
}
//function to display data
function display(data){
    //weather tooddaayyyy
            //get the day name from the date 
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var firstDay = new Date(data.forecast.forecastday[0].date);
            var dayName = days[firstDay.getDay()];
            document.querySelector(".table1 p").innerHTML=dayName
            //get location name
            document.querySelector(".table1 .content p").innerHTML=data.location.name
            //get temp
            document.querySelector(".table1 .content .num h1").innerHTML=data.current.temp_c
            //get icon
            document.querySelector(".table1 .content .icon img").setAttribute("src",`https:${data.current.condition.icon}`)
            //get condition text
            document.querySelector(".table1 .content .icon p").innerHTML=data.current.condition.text


            const month = firstDay.toLocaleString('default', { month: 'long' });
            var dayNum=firstDay.getDate()
            document.querySelector(".table1 .dayMonth").innerHTML=`${dayNum}${month}`

     //weather toommooorroooww
            //get the day name
            var secondDay = new Date(data.forecast.forecastday[1].date);
            var dayName = days[secondDay.getDay()];
            document.querySelector(".table2 .date").innerHTML=`${dayName}`
            // get the icon
            document.querySelector(".table2 img").setAttribute("src",`https:${data.forecast.forecastday[1].day.condition.icon}`)
            //max temp
            document.querySelector(".table2 h2").innerHTML=`${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c`
            //min temp
            document.querySelector(".table2 h6").innerHTML=`${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>`
            //get condition text
            document.querySelector(".table2 .status").innerHTML=data.forecast.forecastday[1].day.condition.text

    //weather afteerrrr tomoooorrooowww
            var thirdDay = new Date(data.forecast.forecastday[2].date);
            var dayName = days[thirdDay.getDay()];
            document.querySelector(".table3 .date").innerHTML=`${dayName}`
            // get the icon
            document.querySelector(".table3 img").setAttribute("src",`https:${data.forecast.forecastday[2].day.condition.icon}`)
            //max temp
            document.querySelector(".table3 h2").innerHTML=`${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c`
            //min temp
            document.querySelector(".table3 h6").innerHTML=`${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>`
            //get condition text
            document.querySelector(".table3 .status").innerHTML=data.forecast.forecastday[2].day.condition.text
            document.querySelector(".table1 .icon1").innerHTML=data.current.humidity+"%"
            document.querySelector(".table1 .icon2").innerHTML=data.current.wind_kph+"km/h"
            document.querySelector(".table1 .icon3").innerHTML=data.current.wind_dir
}

//function (main function) to order the working of each function 
async function allFun(){
    var inputValue =await search()
    var data = await getWeather(inputValue)
    display(data)
}

allFun()

