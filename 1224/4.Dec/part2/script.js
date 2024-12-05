const company = {
  name: 'TechCorp',
  employees: [
    { name: 'Alice', position: 'Developer', salary: 80000 },
    { name: 'Bob', position: 'Manager', salary: 90000 },
    { name: 'Charlie', position: 'Designer', salary: 70000 },
  ],
}

//   Задания:
//   Увеличьте зарплату каждого сотрудника на 10%.
//   Найдите сумму зарплат всех сотрудников.
//   Добавьте нового сотрудника: { name: "Diana", position: "QA Engineer", salary: 75000 }.
//   Отдельно вытащить всех сотрудников чья зарплата больше 80000

console.log(company)

company.employees.forEach(employee => {
  console.log((employee.salary *= 1.1)) // Увеличиваем зарплату на 10%
})

const totalSalary = company.employees.reduce(
  (sum, employee) => sum + employee.salary,
  0
)
console.log('Сумма зарплат всех сотрудников:', totalSalary)

company.employees.push({
  name: 'Diana',
  position: 'QA Engineer',
  salary: 75000,
})

const highEarners = company.employees.filter(
  employee => employee.salary > 80000
)
console.log('Сотрудники с зарплатой больше 80000:', highEarners)
