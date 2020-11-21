//var d1=document.getElementById("d1");
//var n=document.getElementsByClassName("new");
//var t=document.getElementsByTagName("p");

function mouseDown() {
    document.getElementById("d1").style.color = "pink";
  }
  
  function mouseUp() {
    document.getElementById("d1").style.color = "steelblue";
  }

function dbClick(){
  
   document.querySelector("#d2").style.background="url('https://i.gifer.com/Wczc.gif')";
   document.querySelector("#d2").style.backgroundRepeat="no-repeat";
   document.querySelector("#d2").style.backgroundSize="250px 350px";
   document.querySelector("#d2").innerHTML="";
}
function myFunction(x) {
    x.style.background = "yellow";
  }
function rashi(){
    var rValue=document.querySelector(".rashi").value;
    if(rValue==1||rValue==12){
        document.getElementById("rArea").innerHTML="Capricon";
        document.querySelector("#d3").style.background="url('https://freepngimg.com/thumb/capricorn/2-2-capricorn-transparent.png')";
        document.querySelector("#d3").style.backgroundRepeat="no-repeat";
        document.querySelector("#d3").style.backgroundSize="250px 350px";
    }
    else if(rValue==2||rValue==3){
        document.getElementById("rArea").innerHTML="Aquarius";
       
        document.querySelector("#d3").style.background="url('https://www.downloadclipart.net/medium/aquarius-transparent-background.png')";
        document.querySelector("#d3").style.backgroundRepeat="no-repeat";
        document.querySelector("#d3").style.backgroundSize="250px 350px";
    }
    else if(rValue==4||rValue==5){
        document.getElementById("rArea").innerHTML="Aries";
        document.querySelector("#d3").style.background="url('https://freepngimg.com/thumb/aries/8-2-aries-transparent.png')";
        document.querySelector("#d3").style.backgroundRepeat="no-repeat";
        document.querySelector("#d3").style.backgroundSize="250px 350px";
    }
    else if(rValue==6||rValue==7){
        document.getElementById("rArea").innerHTML="Gemini";
        document.querySelector("#d3").style.background="url('http://www.pngall.com/wp-content/uploads/2016/05/Gemini-Free-Download-PNG.png')";
        document.querySelector("#d3").style.backgroundRepeat="no-repeat";
        document.querySelector("#d3").style.backgroundSize="250px 350px";

       
    }
    else if(rValue==8||rValue==9){
        document.getElementById("rArea").innerHTML="Leo";
        document.querySelector("#d3").style.background="url('https://www.pngkey.com/png/full/175-1756560_primary-logo-leo-black-icon-astrological-sign-leo.png')";
        document.querySelector("#d3").style.backgroundRepeat="no-repeat";
        document.querySelector("#d3").style.backgroundSize="250px 350px";
    }
    else if(rValue==10||rValue==11){
        document.getElementById("rArea").innerHTML="Sagittarius";
        document.querySelector("#d3").style.background="url('https://lh3.googleusercontent.com/proxy/OFyYUaxhhnbr65a8I0cAFv4VwmDtOgEJqatR7ZnkQJb-8ay0GMOUMPtoG0f5J1vGBsU5tz-6Vby3Df84baE_zbPRYSwGPBZPzhgoEa9354IoJGNIYiZsYg')";
        document.querySelector("#d3").style.backgroundRepeat="no-repeat";
        document.querySelector("#d3").style.backgroundSize="250px 350px";

        
    }
    else{
        document.getElementById("rArea").innerHTML="Invalid input() please put the value from 01 to 12";
    }
}

function darkMode(){
    document.getElementById("d4").style.background="black";
    document.getElementById("d4").innerHTML="Dark Mode ON";
   document.getElementById("d4").style.color="green";
   //document.getElementById("rBox").style.backgroundImage="black";
}
//function dayMode(){
   // document.getElementById("d4").style.backgroundImage="url('https://i.pinimg.com/originals/4f/6d/05/4f6d052bb1b26150115888ea06d4c106.jpg')";
   // document.getElementById("d4").style.color="black";
   // document.getElementById("d4").innerHTML="Day Mode ON"

//}
