var kutular = document.getElementById("kutucuklarim");
var plusicon = document.getElementById("plusiconu");
var onoffcheck = 0;
function kutulariac(){

        if(onoffcheck == 0){
    kutular.classList.remove("hide");
     kutular.classList.add("show");
    plusicon.classList.remove("arti");
     plusicon.classList.add("carpi");
            onoffcheck = 1;
} else{
onoffcheck = 0;
    kutular.classList.remove("show");
     kutular.classList.add("hide");
       plusicon.classList.remove("carpi");
     plusicon.classList.add("arti");
}
    
}