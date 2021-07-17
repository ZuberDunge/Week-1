let a = 10;
var b = 20;
console.log(a + b);
if (a + b < 40) console.log("less than 40")


var marks = 90;
if (marks > 80) {
    console.log("Distinction")
} else if (marks > 60) {
    console.log("1st grade")
} else {
    console.log("fail")
}


console.log(345 / 10)
console.log(129 % 10)

var ab = 11;
for (var i = 2; i <= ab; i++) {
    if (ab % i == 0) {
        console.log("no prime")
    } else {
        console.log("prime")
    }
}





let car {
    color: "red";
    model: "tesla7";
}
console.log(car.model)



document.getElementById("heading").addEventListener("mouseenter", () => {
    document.getElementById("heading").style.color = "red";
  });
  