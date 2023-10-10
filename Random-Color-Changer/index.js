var color_array = [
  "orange",
  "blue",
  "green",
  "#4B0082",
  "rainbow",
  "red",
  "cyan",
  "pink",
  "black",
  "gold",
];

function selectElement(name) {
  return document.querySelector(name);
}

function colorBlack(selectedColor) {
  selectElement(".wrapper").style.backgroundColor = selectedColor;
  selectElement(".current-color").innerText = selectedColor;
  selectElement(".center-box-button > button").style.color = "white";
  selectElement(".current-color").style.color = "white";
}
function otherColor(selectedColor) {
  console.log(selectElement(".wrapper"));
  selectElement(".wrapper").style.backgroundColor = selectedColor;
  selectElement(".current-color").innerText = selectedColor;
  selectElement(".current-color").style.color = selectedColor;
}

function doChange() {
  var randomNumber = Math.floor(Math.random() * 10); // တန်ဖိုးကို ၀ ကနေ ၉ ထိလိုချင်လို့ ၁၀ နှင့်မြှောက်တာ
  var selectedColor = color_array[randomNumber];
  if (selectedColor === "black") {
    colorBlack(selectedColor);
  } else {
    otherColor(selectedColor);
  }
}
