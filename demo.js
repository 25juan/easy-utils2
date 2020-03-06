import utils from "./src" ;
utils.countDown("10",(count,over)=>{
    console.log(over)
    document.getElementById("count").innerText = count ;
});

