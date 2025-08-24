const key = "19058284957e46e6aa135017252408";
function clickAction() {
    let country = document.getElementById("txt-text-search").value;


    let name = document.getElementById("name_of_country");
    let climate = document.getElementById("climate_type");
    let temp=document.getElementById("temp_of_country");
    let image=document.getElementById("climate_image");
    let update=document.getElementById("last_update");

    fetch(`http://api.weatherapi.com/v1/current.json?key=19058284957e46e6aa135017252408&q=${country}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let last_update = console.log(data.current.last_updated);
            temp.innerHTML= data.current.temp_c +" C";
            name.innerHTML = data.location.name;
            climate.innerHTML = data.current.condition.text ;
            image.innerHTML=`<img src="${data.current.condition.icon}" alt="">`
            
            
            update.innerHTML=data.current.last_update;


        });

        
            //next 7 days weather forecast
            let photoHo=document.getElementById("ho_photo");
            let typeHo=document.getElementById("ho_type");
            let timeHo=document.getElementById("ho_time");

            fetch(`http://api.weatherapi.com/v1/forecast.json?key=19058284957e46e6aa135017252408&q=${country}`)
            .then(res=>res.json())
            .then(element=>{
                console.log(element);
                

                   // photoHo.innerHTML=`<img src="${element.forecast.forecastday.day.condition.icon}" alt="">`;
                    //typeHo.innerHTML=element.forecast.forecastday.day.condition.text;
                console.log(element.forecast.forecastday.hour.condition.text);
                    
                    //timeHo.innerHTML=element.forecast.forecastday.hour.time;
            });

}
