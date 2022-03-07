
function rotate() {
    document.querySelector("#image").style.transform += "rotate("+90+"deg)";
}

function zoomIn() {
    document.querySelector("#image").style.transform +="scale("+1.05+")";
}

function zoomOut() {
    document.querySelector("#image").style.transform +="scale("+0.95+")";
}

function back() {
    document.querySelector("#toolsRow").style.display = "flex";
    document.querySelector("#txtEdit2").style.display = "none";
    document.querySelector("#txtEdit").style.display = "none";
}

function search() {
    var txt = document.querySelector("#s-txt").value;
    if (txt.length >= 5){
        document.querySelector("#image").src = txt;
    }
}

function myFile() {
    var file = document.querySelector("#uploadBtn").value;
    document.querySelector("#image").src = file;
}

function reset() {
    
}

function iReset() {
    document.querySelector("#image").src = "https://th.bing.com/th/id/R.a52a7b80f645313c74c652daa67357f6?rik=lJXLOjhmSwiZWg&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f11%2fPink-Flowers-Dahlia-flower-plants-plantation-outdoor-green-leaves-buds-close-up-image-wallpaper-HD-resolution-3840x2400.jpg&ehk=LRaVeRPbMnxpfrVAajRi0kONuuGj72Tb5f2zKC4GD64%3d&risl=&pid=ImgRaw&r=0";
}

var boldTxt;
globalThis.boldTxt = 0;
function bold() {
    var created_txt = document.querySelectorAll(".createdTxt");
    for (let i=0;i<created_txt.length;i++){
        if ((i == (created_txt.length-1)) && (boldTxt == 0)) {
            created_txt[i].style.fontWeight = "bold";
            document.querySelector("#b").style.opacity = "0.9";
            document.querySelector("#b").style.transform = "scale(0.9)";
            boldTxt = 1;
        }
        else{
            created_txt[i].style.fontWeight = "400";
            document.querySelector("#b").style.opacity = "1";
            document.querySelector("#b").style.transform = "scale(1)";
            boldTxt = 0;
        }
    }
}

var ulineTxt;
globalThis.ulineTxt = 0;
function uline() {
    var created_txt = document.querySelectorAll(".createdTxt");
    for (let i=0;i<created_txt.length;i++){
        if ((i == (created_txt.length-1)) && (ulineTxt == 0)) {
            created_txt[i].style.textDecoration = "underline";
            document.querySelector("#u").style.opacity = "0.9";
            document.querySelector("#u").style.transform = "scale(0.9)";
            ulineTxt = 1;
        }
        else{
            created_txt[i].style.textDecoration = "none";
            document.querySelector("#u").style.opacity = "1";
            document.querySelector("#u").style.transform = "scale(1)";
            ulineTxt = 0;
        }
    }
}

var strikeTxt;
globalThis.strikeTxt = 0;
function strike() {
    var created_txt = document.querySelectorAll(".createdTxt");
    for (let i=0;i<created_txt.length;i++){
        if ((i == (created_txt.length-1)) && (strikeTxt == 0)) {
            created_txt[i].style.textDecoration = "line-through";
            document.querySelector("#s").style.opacity = "0.9";
            document.querySelector("#s").style.transform = "scale(0.9)";
            strikeTxt = 1;
        }
        else{
            created_txt[i].style.textDecoration = "none";
            document.querySelector("#s").style.opacity = "1";
            document.querySelector("#s").style.transform = "scale(1)";
            strikeTxt = 0;
        }
    }
}

var num,txt_Data;
globalThis.num = 0;
globalThis.txt_Data = [];
function addText() {
    var id = "txt"+num;
    txt_Data.push(id);
    num += 1;
    inHeight = ((num%6)*45)-(240);
    input = document.createElement("input");
    options = document.createElement("div");
    input.id = id;
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Enter Text");
    input.classList.add("createdTxt");
    input.onkeypress = function(){input.style.width = ((input.value.length + 10) * 8) + 'px';}
    input.style.marginTop = "calc("+inHeight+"px)";
    document.querySelector("#toolsRow").style.display = "none";
    document.querySelector("#txtEdit").style.display = "block";
    document.querySelector("#mn").appendChild(input);
function addListeners() {
    document.querySelector("#"+id).addEventListener('touchmove', divMove, false);
}

var div = document.querySelector("#"+id);
function divMove(event){
   event.preventDefault();
  var loc=event.targetTouches[0];
 
  div.style.position = 'fixed';
  div.style.margin="0px";
  div.style.top = parseInt(loc.clientY)+ 'px';
  div.style.left = parseInt(loc.clientX)+ 'px';
  
}
addListeners();
}

function upload() {
    document.querySelector("#toolsRow").style.display = "none";
    document.querySelector("#txtEdit2").style.display = "flex";    
}