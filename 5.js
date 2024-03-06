console.log("Завдання: 5 ==============================");

// Створюємо функцію task5, яка буде використовувати проміси.
function task5() {
  // Створюємо змінну counter яка буде лічильником та присвоюємо значення 0
  let counter = 0;

  // Створюємо проміс з іменем intervalPromise.
  const intervalPromise = new Promise((resolve, reject) => {
    // Використовуємо функцію setInterval, щоб імітувати асинхронну операцію,
    // яка повторюється кожну секунду збільшуючи лічильник на 1
    const intervalId = setInterval(() => {
      // Збільшуємо лічильник на 1
      counter++;
      // Виводимо в консоль поточне значення лічильника
      console.log(`Значення лічильника: ${counter}`);

      // Якщо лічильник досягає 5, використовуємо clearInterval та викликаємо resolve,
      // який повертає значення лічильника.
      if (counter === 5) {
        clearInterval(intervalId);
        resolve(counter);
      }
    }, 1000); // Кожну секунду
  });

  // Використовуємо .then метод для отримання значення, яке було передане у функцію resolve()
  // в нашому промісі, та виводимо його в консоль.
  intervalPromise
    .then((value) => {
      console.log(`Значення, яке досягло 5: ${value}`);
    })
    // Використовуємо .catch метод для обробки випадків, коли проміс переходить в стан "rejected".
    // Та виводимо в консоль помилку.
    .catch((error) => {
      console.error("Помилка:", error);
    })
    // Використовуємо .finally метод для виконання дій незалежно від того, в якому стані завершився наш проміс.
    .finally(() => {
      console.log("Завершення лічильника");
    });
}
// Викликаємо функцію task5
task5();
