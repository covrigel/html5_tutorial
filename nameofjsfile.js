function init(){
  var h1tags = document.getElementsByTagName("h1");
  console.log(h1tags);
  h1tags[0].onclick = changeColor;
}

function changeColor(){
  var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
  this.style.color = randomColor;
}

onload = init;