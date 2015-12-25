var formulaOne = function() {
    
    var input = document.getElementById("input-1").value;
    var sum = 0;
    
    for (i = 0; i < input; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    document.getElementById("output-1").innerHTML = sum;
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
    document.getElementById("output-2").innerHTML = sum;
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
        
        document.getElementById("output-3").innerHTML = primeFactor;
    }
};