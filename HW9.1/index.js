//Завдання - 9

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
        development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

const totalSal = company.reduce((sum, user) => sum + user.salary, 0); //вичеслення суми усіх зарплат

console.log("Сума всіх зарплат користувачів: ", totalSal); //67008 
