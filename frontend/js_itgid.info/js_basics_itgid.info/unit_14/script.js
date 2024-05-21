// task 1 --------------------

const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "264f80d75c987ae529bc7e5e13642c24"
}

const cities = {
    "london": ["лондон", "великобритания"],
    "minsk": ["минск", "беларусь"],
    "tallinn": ["таллин", "эстония"],
    "kyiv": ["киев", "украина"]
}

let day = new Date();
let nowDay = day.getDay(),
    nowMonth = day.getMonth(),
    nowYear = day.getFullYear();


let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

let weather_description = {
    "clouds": "Облачно",
    "clear": "Ясно",
    "rain": "Дождь",
    "drizzle": "Морось",
    "mist": "Туман",
    "overcast clouds": "Пасмурно",
    "scattered clouds": "Облачно",
    "clear sky": "Ясно",
    "broken clouds": "Облачно",
    "few clouds": "Облачно",
    "light rain": "Дождь"
};


function getWeather() {
    const cityId = document.querySelector('#city_select').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&appid=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);

    // .catch(function () {
    //     // catch any errors
    // });
};

function showWeather(data) {
    console.log(data);

    document.querySelector('.city').textContent = cities[data.name.toLowerCase()][0].firstLetterCaps();

    document.querySelector('.country').textContent = cities[data.name.toLowerCase()][1].firstLetterCaps();

    document.querySelector('.weekday').textContent = days[nowDay];

    document.querySelector('.date').textContent = day.toLocaleDateString();

    document.querySelector('.weather_description').textContent = weather_description[data.weather[0]['description']];

    document.querySelector('.precipitation_img').setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`);

    document.querySelector('.result .day').innerHTML = Math.round(data.main.temp) + '&deg;';

    document.querySelector('.result .night').innerHTML = Math.round(data.main.feels_like) + '&deg;';
}


getWeather();
document.querySelector('#city_select').onchange = getWeather;

String.prototype.firstLetterCaps = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}