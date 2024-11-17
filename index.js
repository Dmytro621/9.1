let company = {
    sales: [{ name: 'John', Salary: 1000 }, { name: 'Alex', Salary: 1300 }],
    development: {
        web: [{ name: 'Dima', Salary: 2000 }, { name: 'Artur', Salary: 2100 }],
        internals: [{ name: 'Sasha', Salary: 3000}]
    }
}

let lala =[{ name: 'John', Salary: 1000 }, { name: 'Alex', Salary: 1300 }]

function sumSalary(SalCompany) {
    if (Array.isArray(SalCompany)) {
        return SalCompany.reduce((total, currect) => total + currect.Salary, 0)
    } else {
        let sum = 0
        for (let subdep of Object.values(SalCompany)) {
        sum += sumSalary(subdep);
        }
        return sum
    }
}

console.log(sumSalary(company))