var formulaOne = function() {
    
    var input = document.getElementById("input-1").value;
    var sum = 0;
    
    for (i = 0; i < input; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    confirm("The sum of all multiples of 3 and 5 below " + input + " is " + sum);
};

var formulaTwo = function() {

    var active = 1;
    var first = 1;
    var second = 0;
    var sum = 0;
    var limit = document.getElementById("input-2").value;

    while (active < limit) {
        if (active % 2 === 0) {
            sum += active;
        }
        second = first;
        first = active;
        active = first + second;
    }
    confirm("The sum of all the even valued terms of " + limit + " is " + sum);
};

var formulaThree = function() {
    
    var number = document.getElementById("input-3").value;
    var origNumber = number
    var primeFactor = 0;
    var counter = 2;
    
    while (counter * counter < number) {
        if (number % counter === 0) {
            number /= counter;
            primeFactor += counter;
        } else {
            counter++;
        }
    }
    if (number > primeFactor) {
        primeFactor = number;
        confirm("The largest prime factor of " + origNumber + " is " + primeFactor);
    }
};