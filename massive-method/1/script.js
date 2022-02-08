// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив 
// символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
    arr = str.split('-')
    // alert(arr);
    newArr = [];
    arr.map(function(word, index) {
        if (index > 0) {
            word = word[0].toUpperCase() + word.slice(1)
        }
        newArr += word;
        // alert(newArr);
      });
    
    alert(newArr);
  }

camelize("background-color");

camelize("list-style-image") == 'listStyleImage';

camelize("-webkit-transition") == 'WebkitTransition';