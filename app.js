const key = "19058284957e46e6aa135017252408";




function clickAction() {
    let country = document.getElementById("txt-text-search").value;


    let name = document.getElementById("name_of_country");
    let climate = document.getElementById("climate_type");
    let temp = document.getElementById("temp_of_country");
    let image = document.getElementById("climate_image");
    let update = document.getElementById("last_update");
    let windSpeed=document.getElementById("wind");
    let windPressure=document.getElementById("pressure");
    let humid=document.getElementById("humidity");
    let windDr=document.getElementById("wind-dr");
   

    fetch(`https://api.weatherapi.com/v1/current.json?key=19058284957e46e6aa135017252408&q=${country}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
         
            temp.innerHTML = `${data.current.temp_c}\u2103`;
            name.innerHTML = data.location.name;
            climate.innerHTML = data.current.condition.text;
            image.innerHTML = `<img src="${data.current.condition.icon}" alt="">`
            windPressure.innerHTML=`${data.current.pressure_mb} mb`;
            windSpeed.innerHTML=`${data.current.wind_mph} mph`;
            humid.innerHTML=`${data.current.humidity}  g/m^3`;
            windDr.innerHTML=`${data.current.wind_dir}`;
           // sunRice.innerHTML=data.forecast.forecastday[0].astro.sunrise;


            update.innerHTML = data.current.last_update;


        });


    //next 7 days weather forecast
    let photoHo1 = document.getElementById("ho1_image");
    let typeHo1 = document.getElementById("ho1_type");
    let timeHo1 = document.getElementById("ho1_time");

    let photoHo2 = document.getElementById("ho2_image");
    let typeHo2 = document.getElementById("ho2_type");
    let timeHo2 = document.getElementById("ho2_time");

    let photoHo3 = document.getElementById("ho3_image");
    let typeHo3 = document.getElementById("ho3_type");
    let timeHo3 = document.getElementById("ho3_time");

    let photoHo4 = document.getElementById("ho4_image");
    let typeHo4 = document.getElementById("ho4_type");
    let timeHo4 = document.getElementById("ho4_time");

    let photoHo5 = document.getElementById("ho5_image");
    let typeHo5 = document.getElementById("ho5_type");
    let timeHo5 = document.getElementById("ho5_time");

    let photoHo6 = document.getElementById("ho6_image");
    let typeHo6 = document.getElementById("ho6_type");
    let timeHo6 = document.getElementById("ho6_time");

    let photoHo7 = document.getElementById("ho7_image");
    let typeHo7 = document.getElementById("ho7_type");
    let timeHo7 = document.getElementById("ho7_time");

     let sunRice=document.getElementById("sunrise");

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=19058284957e46e6aa135017252408&q=${country}`)
        .then(res => res.json())
        .then(element => {
            console.log(element);

            timeHo1.innerHTML = element.forecast.forecastday[0].hour[0].time;
            typeHo1.innerHTML = element.forecast.forecastday[0].hour[0].condition.text;
            photoHo1.innerHTML = `<img src="${element.forecast.forecastday[0].hour[0].condition.icon}" alt="Weather Icon">`

            timeHo2.innerHTML = element.forecast.forecastday[0].hour[3].time;
            typeHo2.innerHTML = element.forecast.forecastday[0].hour[3].condition.text;
            photoHo2.innerHTML = `<img src="${element.forecast.forecastday[0].hour[3].condition.icon}" alt="Weather Icon">`

            timeHo3.innerHTML = element.forecast.forecastday[0].hour[6].time;
            typeHo3.innerHTML = element.forecast.forecastday[0].hour[6].condition.text;
            photoHo3.innerHTML = `<img src="${element.forecast.forecastday[0].hour[6].condition.icon}" alt="Weather Icon">`

            timeHo4.innerHTML = element.forecast.forecastday[0].hour[9].time;
            typeHo4.innerHTML = element.forecast.forecastday[0].hour[9].condition.text;
            photoHo4.innerHTML = `<img src="${element.forecast.forecastday[0].hour[9].condition.icon}" alt="Weather Icon">`

            timeHo5.innerHTML = element.forecast.forecastday[0].hour[12].time;
            typeHo5.innerHTML = element.forecast.forecastday[0].hour[12].condition.text;
            photoHo5.innerHTML = `<img src="${element.forecast.forecastday[0].hour[12].condition.icon}" alt="Weather Icon">`

            timeHo6.innerHTML = element.forecast.forecastday[0].hour[15].time;
            typeHo6.innerHTML = element.forecast.forecastday[0].hour[15].condition.text;
            photoHo6.innerHTML = `<img src="${element.forecast.forecastday[0].hour[15].condition.icon}" alt="Weather Icon">`

            timeHo7.innerHTML = element.forecast.forecastday[0].hour[21].time;
            typeHo7.innerHTML = element.forecast.forecastday[0].hour[21].condition.text;
            photoHo7.innerHTML = `<img src="${element.forecast.forecastday[0].hour[21].condition.icon}" alt="Weather Icon">`

            sunRice.innerHTML=element.forecast.forecastday[0].astro.sunrise;

        });

    let table = document.getElementById("tbl");
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=19058284957e46e6aa135017252408&q=${country}&days=7&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(element1 => {
            let body = `<tr>
                <th>Date   </th>
                <th/>
                <th>Climate</th>
                
                <th>WindSpeed(Kmph)</th>
                <th>Humidity</th>
                </tr> `

    for (let i = 0; i < 7; i++){
        body += `<tr>
                  
                    <td>${element1.forecast.forecastday[i].date}</td>
                    
                    <td><img src="${element1.forecast.forecastday[i].hour[0].condition.icon}" alt=""></td>
                    <td>${element1.forecast.forecastday[i].hour[0].condition.text}</td>
                    <td>${element1.forecast.forecastday[i].hour[0].wind_kph}</td>
                    <td>${element1.forecast.forecastday[i].hour[0].humidity}</td>
                </tr>`
    }



    table.innerHTML = body;


});

}
