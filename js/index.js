
let mybuttom = document.getElementById("volverArribaBtn");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300){
      mybuttom.style.display = "block";
    }else{
      mybuttom.style.display = "none";
    }
}
mybuttom.onclick = function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
