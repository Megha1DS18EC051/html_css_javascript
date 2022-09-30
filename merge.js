/*Write a function that takes two arrays as arguments
 Merge both arrays and remove duplicate values
 Sort the merge result in ascending order
 Return the resulting array*/

 function Merge(arr1,arr2)
 {let array1=[...arr1,...arr2]
  console.log(array1)
  let mySet=new Set();
  for(i=0;i<array1.length;i++)
  {
      mySet.add(array1[i]);
  }
  console.log(mySet)
 const sortedNumbers = Array.from(mySet).sort((a, b) => a - b);
console.log(sortedNumbers); /*if it returns a negative value, the value in a will be ordered before b.
if it returns 0, the ordering of a and b won’t change.
if it returns a positive value, the value in b will be ordered before a.*/



 }

 Merge([3,4,6,7],[4,5,6,8])