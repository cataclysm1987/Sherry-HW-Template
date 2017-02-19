function CalculateTriangleArea() {
    var one = parseInt(document.getElementById("side1").value);
    var two = parseInt(document.getElementById("side2").value);
    var three = parseInt(document.getElementById("side3").value);

    var sum = one + two + three;
    var s = (one + two + three) / 2;
    var s1 = s - one;
    var s2 = s - two;
    var s3 = s - three;
    var aSquared = s * s1 * s2 * s3;

    var A = Math.sqrt(aSquared);
    if (isNaN(A) || A == 0 || one == 0 || two == 0 || three == 0) {
        document.getElementById("answer1").innerHTML = "Invalid Triangle";
    } else {
        document.getElementById("answer1").innerHTML = "Your Triangle Area is: " + A;
    }
}