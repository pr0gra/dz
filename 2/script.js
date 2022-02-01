// 2. Написать функцию find, которая принимает два аргумента: строку и подстроку и возвращает true/false
//  в зависимости от того содержит строка подстроку или нет

// find('abcd', 'ab') // true
// find('abcd', 'AB') // true
// find('abcd', 'ac') // false

// function find(str, substr) {

//     if (str.indexOf(substr.toLowerCase()) != -1) {
//         alert(true);
//     }

//     else {
//         alert(false);
//     }

// }


// function find(str, substr) {

//     alert(str.includes(substr.toLowerCase()));


// }

find('abcd', 'ab') // true
find('abcd', 'AB') // true
find('abcd', 'ac') // false