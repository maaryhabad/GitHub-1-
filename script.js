onscroll = function(){
  var recolhida = document.getElementsByTagName("header");
  
  for (var i=0; i<header.length;i++) {
    header[i].className="recolhida";
  }

  
  var posicao=window.scrollY ;
  if (posicao > 100) {
    header.classList.add("recolhida");
  }
  else {
    header.classList.remove("recolhida");
  }
}