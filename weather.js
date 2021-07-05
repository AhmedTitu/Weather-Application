//Handle weather related data
//============================
class Weather{
    constructor(city , country){
        this.city = city
        this.country = country
        this.APPID = 'fd740bcfcce3ad32f0c17c762bafb16b'
    }
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.APPID}&units=metric`)

        const responseData = await response.json()

        return{
            main_data : responseData.main ,
            overall_data : responseData.weather[0],
            cityName : responseData.name
        }
    } 

    changeLocation(city , country){
        this.city = city
        this.country = country
    }
}