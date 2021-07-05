// handle UI of weather app
class Ui{
    constructor(){
        this.city = document.querySelector('#w-city')
        this.icon = document.querySelector('#w-icon')
        this.feels = document.querySelector('#w-feels')
        this.temp = document.querySelector('#w-temp')
        this.pressure = document.querySelector('#w-pressure')
        this.humidity = document.querySelector('#w-humidity')
    }

    paint({main_data: {temp , pressure , humidity }, overall_data :{main , icon} , cityName}){
        const iconUrl = Ui.generateIcon(icon)
        this.icon.setAttribute('src' , iconUrl)
        this.city.textContent = cityName
        this.feels.textContent = main
        this.temp.textContent = `Temperature(celL): ${temp}`
        this.pressure.textContent = `Pressure (hpa): ${pressure}`
        this.humidity.textContent = `Humidity (%) : ${humidity}`
    }
    static generateIcon(icon){
        return "http://openweathermap.org/img/w/" + icon + ".png";
    }
    clearField(){
        document.querySelector('#city').value = ''
        document.querySelector('#country').value = ''
    }
}