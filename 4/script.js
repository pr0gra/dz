// 4. Написать функцию, которая принимает как аргумент строку, а возвращает эту же строку только без 2х первых и 2х
//  последних символов, причем это новая строка должна начинаться и заканчиваться с заглавных букв

// yourFunc('abcdefgh') // 'CdeF'

function twoSymbols(str) { 
    str = str.slice(2, -2);
    // alert(str);
    a = str[0].toUpperCase();
    b = str.slice(-1).toUpperCase();
    // alert(a);
    // alert(b);
    str = a + str.slice(1, -1) + b;
    alert(str);
}


twoSymbols('abcdefgh');
