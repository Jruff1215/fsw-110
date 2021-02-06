for (i = 0; i < 10; i++) {
var greeting = document.createElement("h1");
greeting.textContent = "Hello World";
greeting.style.color = "red";
greeting.style.textAlign = "center"
document.body.append(greeting);
}

var names = [
    "Steve", 
    "Larry", 
    "Joe", 
    "Shirley", 
    "Steph", 
    "Nate", 
    "Rick", 
    "Emily"]

for (i = 0; i < names.length; i++) {
    var names2 = document.createElement("li");
    names2.textContent = names[i];
    names2.style.fontSize = "25px";
    names2.style.backgroundColor = "Purple";
    names2.style.color = "white";
    document.body.append(names2)
}