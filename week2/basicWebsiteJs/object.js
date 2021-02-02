var a = document.createElement("a")
var link = document.createTextNode("Home")
a.appendChild(link)
a.title = ("Home")
a.href = "#"
document.body.append(a)
var b = document.createElement("a")
var link2 = document.createTextNode("About")
a.append(link2)
a.title = "About"
a.href = "#"
document.body.append(b)
var c = document.createElement("a")
var link3 = document.createTextNode("Contact")
a.append(link3)
a.title = "Contact"
a.href = "#"
document.body.append(c)
a.style.fontSize = "8mm"
var h = document.createElement("h1")
h.textContent = "Website Project"
document.body.append(h)
h.style.textAlign = "center"
h.style.paddingTop = "35px"
var p1 = document.createElement ("p")
p1.textContent = "This website was built only using Javascript"
document.body.append(p1)
p1.style.fontSize = "15mm"
p1.style.textAlign = "center"
p1.style.color = "purple"
var list = document.createElement("li")
list.textContent = "Javascript"
document.body.append(list)
var list2 = document.createElement("li")
list2.textContent = "Dom"
document.body.append(list2)
var list3 = document.createElement("li")
list3.textContent = "Append"
document.body.append(list3)
var foot = document.createElement("footer")
foot.textContent = "This was quite a process figuring out this assignment. But once I got the hang of it, it became easier."
document.body.append(foot)
var foot2 = document.createElement("li")
foot2.textContent = "Finally got it figured out!!"
document.body.append(foot2)
var foot3 = document.createElement("li")
foot3.textContent = "Now on to more learning"
document.body.append(foot3)
foot.style.paddingTop = "275px"
foot.style.width = "275px"