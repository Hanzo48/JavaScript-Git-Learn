document.getElementById("sort-button").addEventListener("click", function() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var numbers = [num1, num2, num3, num4];
    numbers.sort(function(a, b) {
      return b - a;
    });
    document.getElementById("sorted").innerHTML = numbers;
  });
  