/*A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.
[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
*/

function Boomerang(arr)
{let arr1=new Array();
    for(i=0;i<arr.length-2;i++)
    {
        arr1[i]=[arr[i],arr[i+1],arr[i+2]]
    }

let count=0;
for(i=0;i<arr1.length;i++)
{
    if((arr1[i][0]===arr1[i][2])&&(arr1[i][0]&&arr1[i][2])!=arr1[i][1])
    {
        count++
    }
}
console.log(count)
}

Boomerang([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])
Boomerang([9, 5, 9, 5, 1, 1, 1]) 
Boomerang([5, 6, 6, 7, 6, 3, 9]) 
Boomerang([4, 4, 4, 9, 9, 9, 9]) 
Boomerang([4, 4, 4, 9, 9, 9, 9]) 