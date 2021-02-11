function add(x, y){
    return x + y;
}
document.getElementById("plus").addEventListener("mousedown", function(){
    var x = parseInt(document.getElementById("add1").value);
    var y = parseInt(document.getElementById("add2").value);
    document.getElementById("results").textContent = add(x, y);
})
function sub(x, y){
    return x - y 
}
document.getElementById("minus").addEventListener("mousedown", function(){
    var x = parseInt(document.getElementById("sub1").value);
    var y = parseInt(document.getElementById("sub2").value);
    document.getElementById("results2").textContent = sub(x, y);
})
function mult(x, y){
    return x * y
}
document.getElementById("times").addEventListener("mousedown", function(){
    var x = parseInt(document.getElementById("mul1").value);
    var y = parseInt(document.getElementById("mul2").value);
    document.getElementById("results3").textContent = mult(x, y);
})
