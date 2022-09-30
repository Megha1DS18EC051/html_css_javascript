/*Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and 
value in it (as key-value pairs).

Examples
addName({}, "Brutus", 300) ➞ { Brutus: 300 }
The value argument will be a number

addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }*/

function addName(obj,name,value)
{
    obj[name]=value;
    return obj;

}
console.log(addName({}, "Brutus", 300))
console.log(addName({ piano: 500 }, "Brutus", 400))
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))