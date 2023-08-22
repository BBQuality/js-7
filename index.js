//Завдання 1: Функція для створення символу
function createSymbol() {
  return Symbol();
  // Повернемо символ без опису
}

console.log("Завдання 1 ====================================");
console.log(createSymbol()); // Виведе Symbol()

//Завдання 2: Функція для створення символу з описом та виведення опису
function createSymbolWithDescription(property) {
  // Створюємо символ symbol з описом property
  let symbol = {property};
  return property;
  //Повертаємо опис символа symbol
}

console.log("Завдання 2 ====================================");
console.log(createSymbolWithDescription("My symbol")); // Виведе My symbol

// Завдання 3: Створення властивостей об'єкту з використанням Symbol
// В даному завданні ми створимо властивість об'єкту, ключ якої буде символом.

// Створимо функцію, яка створює об'єкт з властивістю, ключ якої є символом
function createSymbolProperty(property) {

  // Створимо змінну sym яка дорівнює символу без опису
  let sym = Symbol();
  // Створимо пустий об'єкт
  let obj = {};
  // Додамо властивість до об'єкту, ключем якої буде наш символ, а значенням буде аргумент property
  obj[sym] = property;
  // Повертаємо об'єкт
  return obj;
}

console.log("Завдання 3 ====================================");
console.log(
  createSymbolProperty("Це властивість об'єкту з використанням символу")
); //Виведе { [Symbol()]: "Це властивість об'єкту з використанням символу" }

// Завдання 4. Перевіримо чи є символи унікальними
// Функція для створення двох символів з однаковим описом та порівнянням
function createAndCompareTwoSymbols(value) {
  let symbol1 = Symbol(value);
  let symbol2 = Symbol(value);

  // Порівнюємо два символи за допомогою оператора ===
  return symbol1 === symbol2;
  // Створюємо два символи з однаковим описом value, та повертаємо результат порівняння двох символів
}

console.log("Завдання 4 ====================================");

console.log(createAndCompareTwoSymbols("My Symbol")); // Виведе false

// Завдання 5: Створення символу з використанням Symbol.for()

// Функція createSymbolForKey створює новий символ за допомогою Symbol.for() та повертає його
function createSymbolForKey(key) {

  return Symbol.for(key);
  // Використовуємо Symbol.for() для створення нового символу symbol зі значенням key
  // Symbol.for() шукає символ в глобальному реєстру символів. Якщо символ з таким ключем вже існує, він повертає його, в іншому випадку створює новий символ з даним ключем та додає його в реєстр
  // Повертаємо створений символ
}

// Функція compareSymbolsForKey порівнює два символи за допомогою оператора '==='
function compareSymbolsForKey(symbol1, symbol2) {
  // Використовуємо оператор '===' для порівняння двох символів
  // Якщо два символи однакові, він поверне true, в іншому випадку - false
  return symbol1 === symbol2;
}

console.log("Завдання 5 ====================================");
let symbol5 = createSymbolForKey("myKey"); // Створюємо новий символ
let symbol6 = createSymbolForKey("myKey"); // Створюємо новий символ
console.log(compareSymbolsForKey(symbol5, symbol6)); //Виведе: true

// Завдання 6: Використання Symbol.keyFor(sym)

// Функція getSymbolKey приймає символ як аргумент та повертає ключ, який був використаний для його створення
function getSymbolKey(symbol) {
  return Symbol.keyFor(symbol);
  // Використовуємо Symbol.keyFor(sym) для отримання ключа, який був використаний для створення символу та повертаємо його
}

console.log("Завдання 6 ====================================");
let symbolForKey = Symbol.for("myKey"); // Створюємо новий символ або отримуємо існуючий з глобального реєстру символів
console.log(getSymbolKey(symbolForKey)); // Виводимо ключ символу. Виведе: myKey

// Завдання 7: Використання Symbol.toString

function useSymbolToStringTag() {

  let myObject = {}; // Створюємо пустий об'єкт myObject
  let symbol = Symbol.toStringTag;
  myObject[symbol] = "CustomObject"; // Встановлюємо властивість Symbol об'єкту myObject на значення "CustomObject"
  return myObject[symbol]; 


  // Створюємо пустий об'єкт myObject.
  // Встановлюємо властивість Symbol об'єкту myObject на значення "CustomObject".
  // Повертаємо рядкове представлення myObject[Symbol].
}

console.log("Завдання 7 ====================================");
console.log(useSymbolToStringTag()); //Виведе CustomObject

// Завдання 8: Використання Symbol.description

// Функція useSymbolDescription використовує властивість Symbol.description для отримання опису символу.

function useSymbolDescription() {
  const mySymbol = Symbol("mySymbol");
  const symbolDescription = mySymbol.description;
  return symbolDescription;
  // Отримуємо опис символу mySymbol в змінну symbolDescription за допомогою властивості description.
  // Повертаємо symbolDescription
}

console.log("Завдання 8 ====================================");
console.log(useSymbolDescription()); //Виведе mySymbol

// Завдання 9: Використання Symbol.iterator

// Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати
let rangeObject = {
  from: 1,
  to: 7,
  [Symbol.iterator]: function () {
    let current = this.from;
    let last = this.to;

    return {
      next: function () {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

function usesSymbolIterator(obj) {
  let result = [];

  for (let value of obj) {
    result.push(value);
  }

  return result;
}

console.log("Завдання 9 ====================================");
console.log(usesSymbolIterator(rangeObject));  //Виведе [ 1, 2, 3, 4, 5, 6 ]

// Завдання 10: Використання Symbol.iterator

// Оголошення об'єкта "myObject" з властивістю "category"
let myObject = {
  //Cтворюємо масив category
  category: [
    { id: 1, name: "apple" }, // Об'єкт категорії з ідентифікатором 1 та назвою "apple"
    { id: 2, name: "banana" }, // Об'єкт категорії з ідентифікатором 2 та назвою "banana"
    { id: 3, name: "orange" }, // Об'єкт категорії з ідентифікатором 3 та назвою "orange"
    { id: 4, name: "grape" }, // Об'єкт категорії з ідентифікатором 4 та назвою "grape"
    { id: 5, name: "mango" }, // Об'єкт категорії з ідентифікатором 5 та назвою "mango"
    ],
  [Symbol.iterator]: function () {
    let currentIndex = 0;
    let category = this.category;

    return {
      next: function () {
        if (currentIndex < category.length) {
          let value = category[currentIndex].name;
          currentIndex++;
          return { value: value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

function useSymbolIterator(obj) {
  let result = [];
  for (let item of obj) {
    result.push(item);
  }
  return result;
}

console.log("Завдання 10 ====================================");
console.log(useSymbolIterator(myObject));