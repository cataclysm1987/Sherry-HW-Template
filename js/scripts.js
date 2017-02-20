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

year[0][1];
year[1][1];

//Check to see if Christmas month first
//Then check to see if current month


function DaysTilChristmas() {

    var today = new Date();
    var thismonth = today.getMonth();
    var thisyear = today.getFullYear();
    var thisday = today.getDate();
    var cmasday = 25;
    var xmasmonth = 11;
    var daystilchristmas = 0;
    var daysleftinmonth = 0;

    var months = [
  [0, 31],
  [1, 28],
  [2, 31],
  [3, 30],
  [4, 31],
  [5, 30],
  [6, 31],
  [7, 31],
  [8, 30],
  [9, 31],
  [10, 30],
  [11, 31]
    ];

    for (i = thismonth; i < months.length; i ++) {
        if (thismonth == 11) {
            if (thisday == 25) {
                alert("Today is Christmas!");
                break;
            } else if (thisday < 25) {
                daystilchristmas = 25 - thisday;
                alert(daystilchristmas + " days til Christmas!");
                break;
            } else {
                daysleftinmonth = months[i][1] - thisday;
                daystilchristmas = daystilchristmas + daysleftinmonth;
                daystilchristmas = daystilchristmas + 358;
                alert(daystilchristmas + " days til Christmas!");
                break;
            }
        }
        if (thismonth == i) {
            daysleftinmonth = months[i][1] - thisday;
            daystilchristmas = daystilchristmas + daysleftinmonth;
        } else {
            daystilchristmas = daystilchristmas + months[i][1];
        }
        

    }
    alert(daystilchristmas + " days til Christmas!");
}