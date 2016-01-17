"use strict";

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];


function groupBy(criteria) {
    var result = [];
    var key;
    people.forEach(function (element) {
        key = element[criteria];

        if (result[key] === undefined) {
            result[key] = [];
        }

        result[key].push(element.toStr());
    });

    printResult(result);
}

function  printResult(result) {
    for (var i in result) {
        console.log('Group ' + i + ' : ' + '[' + result[i].join(', ') + ']');
    }
}

function Person(firstName, lastName, age) {
    return {
        firstName : firstName,
        lastName : lastName,
        age : age,
        toStr : function() {
            return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
        }
    }
}

groupBy('age');
console.log('-----------------------------------------------------');
groupBy('firstName');
console.log('-----------------------------------------------------');
groupBy('lastName');