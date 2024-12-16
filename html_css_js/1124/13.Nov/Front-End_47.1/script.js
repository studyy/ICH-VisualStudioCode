// async function fetchCommentsApi() {
//   const url = `https://jsonplaceholder.typicode.com/comments`
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
// }

// fetchCommentsApi()

// // 1. объявление асинхронной функции async
// async function fetchCommentsApiTry() {
//   //2. оборачиваем будущую логику в try catch
//   try {
//     const url = `https://jsonplaceholder.typicode.com/comments`
//     // 3. Отправляем запрос сразу обрабатывая промис через await
//     const response = await fetch(url)
//     // 4. Обрабатываем ошибку запроса, если сам по себе запрос падает (не верный адрес, либо сервер не работает),
//     //  то мы натыкаемся на этот блок.
//     //  Используется для отлова именно ошибки запроса
//     if (!response.ok) {
//       throw new Error('there is nothing in this address')
//     }
//     //5. получение самих данных и обработка объекта response
//     const data = await response.json()
//     //в данном варианте мы намеренно совершаем ошибку не связанную с запросом и нас переводит на блок catch
//     console.log(datascas)

//     //catch отрабатыват в случае, если запрос отправлен успешно, но косяки были при реализации логики
//   } catch (error) {
//     console.error(error)

//     // Блок finally выполнится в любом случае, несмотря ни на какие ошибки
//   } finally {
//     console.log('Block will be completed anyways!')
//   }
// }

// //вызов функции
// fetchCommentsApiTry()

// async function fetchPostsApi() {
//   try {
//     const url = `https://jsonplaceholder.typicode.com/posts`
//     const response = await fetch(url)
//     if (!response.ok) {
//       throw new Error('there is nothing in this address')
//     }
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }
// fetchPostsApi()

// Ссылка должно через / принимать параметр id который мы передаем в функцию
// async function fetchPostsApiById(id) {
//   try {
//     const url = `https://jsonplaceholder.typicode.com/posts/${id}`
//     const response = await fetch(url)

//     if (!response.ok) {
//       throw new Error('there is nothing in this address')
//     }

//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }
// fetchPostsApiById(1)

// async function fetchCommentsApi() {
//   try {
//     const url = `https://jsonplaceholder.typicode.com/comments`
//     const response = await fetch(url)

//     if (!response.ok) {
//       throw new Error('there is nothing in this address')
//     }

//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }
// fetchCommentsApi()

// async function fetchCommentsApiById(id) {
//   try {
//     const url = `https://jsonplaceholder.typicode.com/comments/${id}`
//     const response = await fetch(url)

//     if (!response.ok) {
//       throw new Error('there is nothing in this address!')
//     }

//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }
// fetchCommentsApiById(1)

// async function fetchAlbumsApi() {
//   try {
//     const url = `https://jsonplaceholder.typicode.com/albums`
//     const response = await fetch(url)

//     if (!response.ok) {
//       throw new Error('there is nothing in this address!')
//     }
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }
// fetchAlbumsApi()

// async function fetchAlbumsApiById(id) {
//   try {
//     const url = `https://jsonplaceholder.typicode.com/albums/${id}`
//     const response = await fetch(url)

//     if (!response.ok) {
//       throw new Error('there is nothing in this address!')
//     }
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   } finally {
//     const cat =
//       'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
//     const response = await fetch(cat)

//     if (!response.ok) {
//       throw new Error('there is some CAT error')
//     }
//     const data = await response.json()
//     console.log(data)
//   }
// }
// fetchAlbumsApiById(1)

// async function fetchApiPhotosById(id) {
//   const url = `https://jsonplaceholder.typicode.com/photos/${id}`
//   const cat =
//     'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
//   try {
//     const response = await fetch(url)
//     if (!response.ok) {
//       throw new Error('there is a mistake')
//     }
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   } finally {
//     const response = await fetch(cat)
//     if (!response.ok) {
//       throw new Error('there is a second error')
//     }
//     const data = await response.json()
//     console.log(data)
//   }
// }
// fetchApiPhotosById(3)
