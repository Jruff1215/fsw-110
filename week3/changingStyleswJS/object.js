for (i = 0; i < 5; i++) {
var h2 = document.createElement("h2");
h2.textContent = "Five of These!!!";
h2.style.fontSize = "20px";
h2.style.fontWeight = "lighter";
h2.style.fontFamily = "sans-serif";
h2.style.color = "cornflowerblue";
document.body.append(h2);
h2.classList.add("border")
}