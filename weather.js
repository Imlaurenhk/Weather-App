fetch("http://api.weatherapi.com/v1/current.json?key=8e1aa08838de40c89a533703232202&q=92618&aqi=no").then((response)=>response.json()).then((json)=>{
    console.log(json.current.temp_c, json.current.temp_f);
});

