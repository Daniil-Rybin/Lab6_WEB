function calc() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    document.getElementById('result').textContent = a + b + c;
}