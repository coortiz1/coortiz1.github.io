let click = 0;
function buttonClick(){
    click = click + 1;
    document.getElementById('num').innerHTML = click;
}

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
const ids = ['cross1','cross2','cross3','cross4','cross5','cross6'];
function reset(){
    for (let i = 0; i < ids.length; i++){
        if (document.getElementById(ids[i]).style.textDecoration === "line-through red")
        {
            document.getElementById(ids[i]).style.textDecoration = "none";
        }
    }
}