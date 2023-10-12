function selectDOM(elname) {
  return document.querySelector(elname);
}
function returnEventListen(ename) {
  var docname = selectDOM(ename);
  return docname.addEventListener("click", (e) => {
    var currentValue = e.target.innerText;
    if (currentValue == "INCREASE")
      selectDOM("#count-value").innerText =
        parseInt(selectDOM("#count-value").innerText) + 1;
    else if (currentValue == "RESET") selectDOM("#count-value").innerText = 0;
    else selectDOM("#count-value").innerText -= 1;
    console.log(currentValue);
  });
}
returnEventListen("#increase");
returnEventListen("#reset");
returnEventListen("#decrease");
