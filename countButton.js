const countButton = document.getElementById("countButton");
const countLabel = document.getElementById("countLabel");

let clickCount = 0;
countLabel.innerHTML = "Times clicked: " + clickCount;

console.log("hello world!");
console.log(countButton);

countButton.addEventListener("click", () => {
    clickCount += 1;
    console.log(clickCount);
    countLabel.innerHTML = "Times clicked: " + clickCount;
});