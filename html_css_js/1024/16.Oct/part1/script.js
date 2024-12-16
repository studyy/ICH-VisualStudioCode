const container = document.querySelector(".container");

const createNewElement = (element) => {
  const newEl = document.createElement(element);

  return newEl;
};

// newList.innerHTML = "Hello"

// container.append(newList)
// container.insertAdjacentHTML("afterend","afterend Hello"
// )

const newList = document.createElement("ul");
container.append(newList);
const arr = [
  {
    id: 1,
    title: "Hello World1",
    description: "description1",
  },
  {
    id: 2,
    title: "Hello World2",
    description: "description2",
  },
  {
    id: 3,
    title: "Hello World3",
    description: "description3",
  },
];

for (let i = 0; i < arr.length; i++) {
  const li = createNewElement("li");
  const strong = createNewElement("strong");
  const title = createNewElement("h2");
  const description = createNewElement("p");
  strong.innerText = arr[i].id;
  title.innerText = arr[i].title;
  description.innerText = arr[i].description;
  li.append(strong, title, description);
  newList.append(li);
}

// Задача: необходимо вывести на страницу все элементы из массива в формате списка

const newArr = ['first title', 'second title', 'third title']
const List = document.createElement("ul")

for (let i = 0; i < newArr.length; i++) {
    const li = createNewElement("li")
    li.innerText = newArr[i]
    List.append(li)
}
document.body.append(List)

// У вас есть массив const tasks = ['Task 1', 'Task 2', 'Task 3']. Необходимо вывести все элементы массива на страницу в формате списка:
// ul > li*3
// Затем необходимо автоматически удалить последний элемент списка (без использования событий, таких как клики).
// Условия:
// Не изменять HTML-разметку.
// Использовать только JavaScript для создания списка и удаления последнего элемента после его добавления.

const tasks = ['Task 1', 'Task 2', 'Task 3']
const tasksList = document.createElement("ul")

for (let i = 0; i < tasks.length; i++) {
    const li = createNewElement("li")
    li.innerText = tasks[i]
    tasksList.append(li)
}
document.body.append(tasksList)
tasksList.lastChild.remove()

