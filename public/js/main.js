const submitBtn = document.getElementById('submitBtn');
let cityName =document.getElementById('cityName');
let city_name =document.getElementById('city_name');
let real =document.getElementById('real');
let temp_status =document.getElementById('temp_status');

const data_hide = document.querySelector('.middle_layer');


const getinfo = async (e)=>{ 
    
    e.preventDefault();
    let city_val = cityName.value;
    if(city_val == ""){
        city_name.innerHTML = "Please Write the city name before search";
        data_hide.classList.add('data_hide');
    }
    else{
        try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city_val}&appid=a2d48f5e3031ed4b268fe1e6487283a8`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

           city_name.innerHTML = `${arrData[0].name } ,  ${arrData[0].sys.country}`;
           real.innerHTML = `${arrData[0].main.temp}`;

           const tempStatus =  arrData[0].weather[0].main; 

if(tempStatus =="Clear"){
    temp_status.innerHTML = 
    '<i class="fas fa-sun" style="color: #eccc68"></i>';
}
else if(tempStatus == "Clouds"){
    temp_status.innerHTML =  '<i class="fas fa-cloud" style="color: #f1f2f6"></i>';
}
else if(tempStatus == "Rainy"){
    temp_status.innerHTML = '<i class="fas fa-cloud-rain" style="color: #a4b0be"></i>';
}
else {
    temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #f1f2f6"></i>';
}
data_hide.classList.remove('data_hide');
        }
        catch{
            city_name.innerHTML = "Please enter the city name properly";
            data_hide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getinfo);