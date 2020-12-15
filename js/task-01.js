const logItems = function(array) {
    for (const friend of array) {
        console.log(`${array.indexOf(friend) + 1} - ${friend}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);