/*Write a function that takes a Set as argument
Convert the Set to an Array
 Return the Array
*/

function SetToArray(set1)
{
    const arr = Array.from(mySet);
console.log(arr); 

}
let mySet=new Set()
mySet.add(5)
mySet.add(9)
SetToArray(mySet)