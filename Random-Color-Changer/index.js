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

function doChange() {
  var randomNumber = Math.floor(Math.random() * 10); // တန်ဖိုးကို ၀ ကနေ ၉ ထိလိုချင်လို့ ၁၀ နှင့်မြှောက်တာ
  var selectedColor = color_array[randomNumber];
  if (selectedColor === "black") {
    document.querySelector(".wrapper").style.backgroundColor = selectedColor;
    document.querySelector(".current-color").innerText = selectedColor;
    document.querySelector(".center-box-button > button").style.color = "white";
    document.querySelector(".current-color").style.color = "white";
    console.log(" I am black ");
    return;
  }
  document.querySelector(".wrapper").style.backgroundColor = selectedColor;
  document.querySelector(".current-color").innerText = selectedColor;
  document.querySelector(".current-color").style.color = selectedColor;
  console.log("I am " + selectedColor);
}
