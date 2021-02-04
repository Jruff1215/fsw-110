var head = document.createElement("h1")
head.textContent = "Hello World"
document.body.append(head)
var greeting = [
    {greeting: "Hello World", color: "Red"},
    {greeting: "Hello World", color: "green"},
    {greeting: "Hello World", color: "black"},
    {greeting: "Hello World", color: "gray"},
    {greeting: "Hello World", color: "teal"},
    {greeting: "Hello World", color: "pink"},
    {greeting: "Hello World", color: "orange"},
    {greeting: "Hello World", color: "yellow"},
    {greeting: "Hello World", color: "blue"},
    {greeting: "Hello World", color: "silver"}
]

var greetingList = document.getElementsById("hello")
console.log(greeting)

var i;
for (i = 0; i < greeting.length; i++) {
    console.log(i)
}