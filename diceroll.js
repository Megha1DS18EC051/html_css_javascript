/*In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. 
If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? 
Create a function that takes your position a and your friend's position b and returns a boolean 
possibleBonus(3, 7) ➞ true
possibleBonus(5, 3) ➞ false
You cannot move backward
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs.
possibleBonus(1, 9) ➞ false
const add=()=>{ 
    let a=30;
    let b=20;
    let c=a+b;
    console.log(c)
}



*/
const possibleBonus = (a,b) =>( a < b || a==b) && b - a <= 6;
console.log(possibleBonus(3,7))
console.log(possibleBonus(5,3))
console.log(possibleBonus(1,1))