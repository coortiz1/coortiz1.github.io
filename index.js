function expressions(){
    var image = document.getElementById('myImage');
    if (image.src.match("https://i.imgur.com/q04YrKj")){
        image.src = "https://i.imgur.com/ko7b1HU.jpg"
    }
    else if (image.src.match("https://i.imgur.com/ko7b1HU.jpg")){
        image.src = "https://i.imgur.com/GgG9qN8.jpg"
    }
    else if (image.src.match("https://i.imgur.com/GgG9qN8.jpg")){
        image.src = "https://i.imgur.com/Dn7XGQ3.jpg"
    }
    else if (image.src.match("https://i.imgur.com/Dn7XGQ3.jpg")){
        image.src = "https://i.imgur.com/NGyK95q.jpg"
    }
    else{
        image.src = "https://i.imgur.com/q04YrKj.jpg"
    }                
}

function cross(id){
    var elem = document.getElementById(id);
    if (elem.style.textDecoration === "line-through red"){
        elem.style.textDecoration = "none";
    }
    else{
        elem.style.textDecoration = "line-through red";
    }

}

let click = 0;
if (localStorage.getItem("exerciseAmount") === null){
    localStorage.setItem("exerciseAmount","0");
}
document.getElementById('cross1').innerHTML = 'Exercise (' + localStorage.getItem("exerciseAmount") + ' times)';

function exercise(){
    click = parseInt(localStorage.getItem("exerciseAmount"));

    if (document.getElementById('cross1').style.textDecoration === "line-through red"){
        click = click + 1;
        document.getElementById('cross1').innerHTML = 'Exercise (' + click.toString() + ' times)';        
    }
    else if (document.getElementById('cross1').style.textDecoration === "none" && click > 4){
        click = 0
        document.getElementById('cross1').innerHTML = 'Exercise (0 times)'
    }
    localStorage.setItem("exerciseAmount",click.toString());
}

const ids = ['cross1','cross2','cross3','cross4','cross5','cross6','day1','day2','day3','day4','day5','day6','day7'];

function reset(id){
    for (let i = 0; i < id.length; i++){
        if (document.getElementById(id[i]).style.textDecoration === "line-through red")
        {
            document.getElementById(id[i]).style.textDecoration = "none";

        }
    }
}


function updateCount(id){
    let strike = [0,0,0,0,0,0,0,0,0,0,0,0,0];  
    let strikeBin = "";
    for (let i = 0; i < ids.length; i++){
        if (document.getElementById(id[i]).style.textDecoration === "line-through red"){
            strike[i] = 1;
        }
        strikeBin = strikeBin + strike[i].toString();
    }
    localStorage.setItem("strike",strikeBin);
}

if (localStorage.getItem("strike") === null)
{
    localStorage.setItem("strike","0000000000000");
}
let strikeBin = localStorage.getItem("strike");

for (let i = 0; i < strikeBin.length; i++){    
    if (strikeBin[i] === "1"){
        document.getElementById(ids[i]).style.textDecoration = "line-through red";
    }
    else{
        document.getElementById(ids[i]).style.textDecoration = "none";
    }
}
