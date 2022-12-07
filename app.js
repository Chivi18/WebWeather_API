var search = document.querySelector('.search') 
var city = document.querySelector('.city') 
var country = document.querySelector('.country')
var value = document.querySelector('.value') 
var shortdesc = document.querySelector('.short-desc') 
var visibility = document.querySelector('.visibility span') 
var sun = document.querySelector ('.sun span')
var wind = document.querySelector ('.wind span')
var time = document.querySelector ('.time' )
var content = document.querySelector ('.content' )
 
async function changeweatherui(){
     let capitalseach= search.value.trim()
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalseach}&appid=16b98e62acb7ccb0ff4d085e1295f90e`
    let data = await fetch(apiurl).then(res=> res.json())
    if (data.cod==200){
        console.log(data)
        content.classList.remove('hide')
    city.innerText = data.name
    country.innerText = data.sys.country
    visibility.innerText = data.visibility+'m'
    wind.innerText = data.wind.speed +'m/s'
    sun.innerText = data.main.humidity +'%'
    value.innerText = Math.round(data.main.temp -273.15)
    shortdesc.innerText=data.weather[0]? data.weather[0].main:''
    time.innerText= new Date().toDateString('vi')
    }else{
        content.classList.add('hide')
    }
}

search.addEventListener('keypress',function(e){
    if(e.code =='Enter')
    changeweatherui() 
})
