//Instantiate Ui class
const ui = new Ui()
//Instantiate weather class
const weather = new Weather('London' , 'UK')



document.querySelector('#w-form').addEventListener('submit' , (p)=>{
    p.preventDefault()
    const city =document.querySelector('#city').value
    const country =document.querySelector('#country').value

    if(city === '' || country === ''){
        swal("Please, provide nacessery information.");
    }
    else{
        weather.changeLocation(city , country)
        ui.clearField()
        weatherData()
        
    }
})


function weatherData(){
    weather.getWeather().then(data =>{
        console.log(data)
        ui.paint(data)
    } )
}

