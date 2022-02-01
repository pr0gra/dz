// 1. Написать функцию, которая принимает как аргумент строку, а возвращает объект, 
// который содержит первый и последний символ.

// yourFunc('abc')  // { firstSymbol: 'a', lastSymbol: 'c' }



function objFirstLastSymbol(str) {

    first =  str[0];

    last = str.slice(-1);


    let obj = {
   		first: first,
        last: last,
    }
    
	alert(obj.first, obj.last);
    
}

let str = "abc";

alert(objFirstLastSymbol(str));        


