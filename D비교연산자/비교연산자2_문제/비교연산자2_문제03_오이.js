/*
	[설명] 
		현금 20000만원을 가지고 
		마트에가서 오이를 9개구매했더니,
		거스름돈이 2000원이다.
	[문제]
		위 식을 표현하고, 풀이과정을 주석으로 작성하시오.

*/

var cash = 20000
var change = 2000
var cu_c = 9
var cu = 0

console.log(cash == change + cu_c*cu)
/*
18000 = 9x
x = 2000

*/

var cu = 2000
console.log(cash == change + cu_c*cu)
