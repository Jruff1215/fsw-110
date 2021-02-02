var welcome  = document.createElement("h1")
welcome.textContent = "Welcome to my JS site"
var text1 = document.getElementById("header")
text1.append(welcome)
console.log(text1.textContent)
var p1 = document.createElement("p")
p1.textContent = "All of this was created with Javascript"
document.body.append(p1)
var list = document.createElement("li")
list.textContent = "three"
document.body.append(list)