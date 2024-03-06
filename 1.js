console.log("Завдання: 1 ==============================");

// Функція task1 не приймає жодних аргументів
function task1() {
  /**
   * Функція `getData` симулює отримання даних з асинхронного джерела, такого як запит до бази даних або API.
   *
   *  data - вхідні дані.
   *  timeout - час в мілісекундах, який витрачається на отримання даних, за замовчуванням 2000мс.
   */
  function getData(data, timeout = 2000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(data).length > 0) {
          resolve(data);
        } else {
          reject(new Error("Об'єкт пустий"));
        }
      }, timeout);
    });
  }

  // Ми викликаємо getData з об'єктом { name: "John", age: 30, city: "New York" } і часом очікування 2000
  getData({ name: "John", age: 30, city: "New York" })
    // Ми обробляємо дані, повернуті промісом
    .then((data) => {
      // У разі успіху виводимо в консоль дані
      console.log("Отримані дані:", data);
    })
    // У разі помилки виводимо повідомлення помилки
    .catch((error) => {
      console.error("Помилка:", error.message);
    })
    // Незалежно від того, завершилось виконання проміса успіхом чи ні виводимо в консоль "Завдання 1 завершено"
    .finally(() => {
      console.log("Завдання 1 завершено");
    });
}

// Викликаємо функцію task1
task1();
