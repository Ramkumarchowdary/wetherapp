// let users=fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=8ffeeb303991d3093a8987924f72b8bf");
// users.then((data)=>{
//     console.log(data);
//     return data.json()
// }).then((data)=>{
//     console.log(data);
   


// })
async function userdat(){
    try{
    let  click=document.getElementById("input").value
    
    let userdata= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${click}&appid=8ffeeb303991d3093a8987924f72b8bf`);
    // console.log(userdata)
    userdata=await userdata.json();
    // console.log(userdata.base)
    
    cloud.innerHTML=`<h1> wind: ${userdata.wind.speed}</h1>
    <h1>mine: ${userdata.main.temp_min }</h1>
    <h1>country: ${userdata.sys.country }</h1>
    <h1>place: ${userdata.name }</h1>` 
    }
    catch(ere){
        console.log(ere,"erroe")
    }
    // <i class="fa fa-cloud" aria-hidden="true" id="cloud"></i>
    // <i class="fa fa-free-code-camp" aria-hidden="true"></i>

}
// setInterval(userdat,2000)