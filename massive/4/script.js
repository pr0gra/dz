// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
    
    let arr = []
    let sum = 0;

    number = +prompt('Введите число', '');

    while (isNaN(number)){
        alert('это не число');
        number = +prompt('Введите число', '');
    }
    

    while (typeof number === 'number' && number !== 0 ) {
        arr.push(number);
        alert(arr);
        number = +prompt('Введите число', '')

        if (isNaN(number)){
            break
        }
        
    }

    for (let num of arr) {
        sum += num;
      }

    return sum; 
    
}


alert(sumInput());