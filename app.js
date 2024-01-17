var content = document.getElementById("paragraph").innerText;
var btn = document.getElementById("show_button");
var count = 0;

console.log(content.length);

if (content.length > 25) {
    textfunc();
}

function textfunc() {
    var content2 = content.slice(0, 100);
    var show =(document.getElementById("paragraph").innerText = content2)
    var btn =(document.getElementById("show_button").style.display = "block")
    btn.innerHTML ="show more"
}

function showmorefunc(){
    var contentfull = document.getElementById("paragraph").innerText = content
    console.log(contentfull.length +"show more fun");
    var textBtn = document.getElementById("show_button").innerText ="show less"
    console.log(textBtn , "button"); 
}

function mainFun(){
    if(count){
      btn.innerHTML ="show more"
      textfunc()
      count ++
    }
    else{
      btn.innerHTML ="show less"
      showmorefunc()
        count --
    }
}






