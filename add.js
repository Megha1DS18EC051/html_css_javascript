/*Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.*/

function nested(arr1,arr2)
{
    arr1min=Math.min(...arr1);
    arr2min=Math.min(...arr2);
    arr1max=Math.max(...arr1);
    arr2max=Math.max(...arr2);
if( (arr1min>arr2min) && (arr1max<arr2max))
{
    return true
}
else{
    return false
}

}


nested([5,2,3],[1,2,6])