var button = document.getElementById("mybutton");
var whatever = document.getElementById("whatever");

// console.log(button);
// console.log(whatever);

function showHidewhatever(){
  if (whatever.style.display === "none"){
    whatever.style.display = "block";
  } else {
    whatever.style.display = "none";
  }
}

button.onclick = showHidewhatever;
