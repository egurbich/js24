console.log("Завдання: 2 ==============================");

// Створюємо функцію task2
function task2() {
  // Створюємо функцію promise1
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 2000);
    });
  }

  // Створюємо функцію promise2
  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 2 виконано");
      }, 5000);
    });
  }

  // Використовуємо Promise.race для визначення, який проміс виконується першим.
  Promise.race([promise1(), promise2()])
    // У разі успіху виводимо результат
    .then((result) => {
      console.log(result);
    })
    // У разі помилки виводимо повідомлення про помилку
    .catch((error) => {
      console.error("Помилка:", error);
    })
    // Незалежно від результату, виводимо повідомлення про завершення обробки промісів
    .finally(() => {
      console.log("Завдання 2 завершено");
    });
}

// Викликаємо функцію task2
task2();
