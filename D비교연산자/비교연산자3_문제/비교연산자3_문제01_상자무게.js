/*
[설명]
    무게가 2킬로그램인 상자에 한개에 5킬로그램인 
    물건을 x개 넣으면 전체 무게가 30킬로그램을 넘는다.
 [문제]
		위식을 표현하고, 풀이과정을 주석으로 작성하시오.
*/


let box = 2
let stuff = 5
let total = 30

let stuff_count = 6 // parseInt((total-box)/stuff)
/*
30 - 2 > 5*x
28 > 5x
28/5 > x

*/
console.log(box+stuff*stuff_count> 30)