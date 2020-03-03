var employeeSalaries = [100000, 10000, 1000000, 55000, 75000, 24000, 32000, 40000, 29500, 72000];

console.log(employeeSalaries);

/* 
    update all of these values; if salary < 50k, then add 5% bonus, otherwise
    add 2.5% bonus
*/

for (var i = 0; i < employeeSalaries.length; i++) {
    if (employeeSalaries[i] < 50000) {
        employeeSalaries[i] = employeeSalaries[i] * 1.05;
    } else {
        employeeSalaries[i] = employeeSalaries[i] * 1.025;
    }

}

console.log(employeeSalaries);

function salaryBonus(salary, bonus) {
    var actualBonus = salary * bonus;
    var newSalary = salary + actualBonus;
    return newSalary;
}

var test = salaryBonus(10000, 0.10);
console.log("test = " + test);